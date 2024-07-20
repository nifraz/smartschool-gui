import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { 
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  IGetRowsParams,
  RowClickedEvent,
} from 'ag-grid-community'; // Column Definition Type Interface
import { Observable, catchError, map, of } from 'rxjs';
import { AgGridFilter, AgGridFilterType, AgGridType, ConditionalOperator, GraphqlService, RemoteGridApi, convertToEndOfDay } from '../services/graphql.service';
import { RemoteGridBindingDirective } from '../directives/remote-grid-binding.directive';
import { ISimpleFilterModelType } from 'ag-grid-community/dist/types/core/filter/provided/simpleFilter';

@Component({
  selector: 'app-graphql-data-grid',
  standalone: true,
  imports: [
    AgGridAngular,
    CommonModule,
    RouterLink,
    RemoteGridBindingDirective,
  ],
  templateUrl: './graphql-data-grid.component.html',
  styleUrl: './graphql-data-grid.component.scss'
})
export class GraphqlDataGridComponent<T extends object> implements OnInit, RemoteGridApi<T> {
  
  @Input()collection: string = '';
  @Input()themeClass: string = "ag-theme-quartz-dark";
  @Input()colDefs: ColDef<T>[] = [];

  @Output()recordClicked: EventEmitter<T> = new EventEmitter<T>();

  defaultColDef: ColDef = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
  };

  gridOptions: GridOptions<T> = {
    pagination: true,
    paginationPageSize: 20,
    paginationPageSizeSelector: [20, 50, 100],
    rowSelection: 'single',
    rowModelType: 'infinite',
    cacheBlockSize: 100,
    columnDefs: this.colDefs,
    suppressRowClickSelection: true,
    onSortChanged: () => this.saveGridState(),
    onFilterChanged: () => this.saveGridState(),
    onColumnMoved: () => this.saveGridState(),
    onColumnResized: () => this.saveGridState(),
    onColumnPinned: () => this.saveGridState(),
  };

  gridApi?: GridApi<T>;
  remoteGridBinding = this;

  constructor(
    private graphqlService: GraphqlService,
  ) {}
  
  ngOnInit(): void {
    console.log('graphql');
  }

  saveGridState(): void {
    if (this.gridApi) {
      const gridState = {
        filterModel: this.gridApi?.getFilterModel(),
        columnState: this.gridApi?.getColumnState(),
      };
      this.graphqlService.saveState(this.collection, gridState);
    }
  }

  applyGridState(): void {
    const gridState = this.graphqlService.getState(this.collection);
    if (gridState) {
      this.gridApi?.setFilterModel(gridState.filterModel);
      this.gridApi?.applyColumnState({
        state: gridState.columnState,
        applyOrder: true,
      });
    }
  }
    
  onRowClicked($event: RowClickedEvent<T,any>) {
    this.recordClicked.emit($event.data);
  }
  
  getData(params: IGetRowsParams): Observable<{ data: T[]; totalRecords: number }> {
    this.gridApi?.showLoadingOverlay();
    const query = this.constructQuery(params);
    return this.graphqlService.getGqlQueryObservable(query).pipe(
      map(res => {
        this.gridApi?.hideOverlay()
        return {
          data: res.data[this.collection].items,
          totalRecords: res.data[this.collection].totalCount,
        }
      }),
      catchError(err => {
        this.gridApi?.hideOverlay();
        console.error(err);
        return of({
          data: [],
          totalRecords: 0,
        });
      }),
    );
  }

  onGridReady(event: GridReadyEvent<T, any>): void {
    this.gridApi = event.api;
    this.applyGridState();
  }

  // onGridChange(event: AgGridEvent<T, any>): void {
  //   this.fetchData(event.api);
  // }

  constructQuery(params: IGetRowsParams): string {
    const filterModel: {[key: string]: AgGridFilter} = params.filterModel;
    const sortModel = params.sortModel;
    const visibleColumns = this.gridApi?.getAllDisplayedColumns().map(col => col.getColId()).filter(colId => colId != 'id') || [];

    // Construct filtering part of the query
    const filteredColumns = Object.entries(filterModel)
      .map(([colId, filter]) => {
        if (filter.conditions?.length == 2) {
          const filterObjects = filter.conditions
            .map((x: AgGridFilter) => {
              const filters: AgGridFilter[] = [];
              if (x.type == AgGridType.IN_RANGE) {
                filters.push(
                  {
                    field: colId,
                    filterType: x.filterType,
                    type: AgGridType.GREATER_THAN_OR_EQUAL,
                    filter: this.getGqlFilterValue(x.filterType, x.filterType == AgGridFilterType.NUMBER ? x.filter : x.dateFrom),
                  },
                  {
                    field: colId,
                    filterType: x.filterType,
                    type: AgGridType.LESS_THAN_OR_EQUAL,
                    filter: this.getGqlFilterValue(x.filterType, x.filterType == AgGridFilterType.NUMBER ? x.filterTo : convertToEndOfDay(filter.dateTo)),
                  }
                );
                return this.constructGqlCondition(filters, ConditionalOperator.AND);
              }
              return `{${colId}: {${this.getGqlFilterOperation(x.type)}: ${this.getGqlFilterValue(x.filterType, x.filter)}}}`;
            })
            .join(' ');
          return `{${filter?.operator?.toLowerCase()}: [${filterObjects}]}`;
        }
        else {
          const filters: AgGridFilter[] = [];
          if (filter.type == AgGridType.IN_RANGE) {
            filters.push(
              {
                field: colId,
                filterType: filter.filterType,
                type: AgGridType.GREATER_THAN_OR_EQUAL,
                filter: this.getGqlFilterValue(filter.filterType, filter.filterType == AgGridFilterType.NUMBER ? filter.filter : filter.dateFrom),
              },
              {
                field: colId,
                filterType: filter.filterType,
                type: AgGridType.LESS_THAN_OR_EQUAL,
                filter: this.getGqlFilterValue(filter.filterType, filter.filterType == AgGridFilterType.NUMBER ? filter.filterTo : convertToEndOfDay(filter.dateTo)),
              }
            );
            return this.constructGqlCondition(filters, ConditionalOperator.AND);
          }
          return `{${colId}: {${this.getGqlFilterOperation(filter.type)}: ${this.getGqlFilterValue(filter.filterType, filter.filter)}}}`;
        }
      });

    const filterQuery = `${ConditionalOperator.AND.toLowerCase()}: [${filteredColumns.join(' ')}]`
    // Construct sorting part of the query
    const sortQuery = sortModel
      .map(column => `${column.colId}: ${column.sort.toUpperCase()}`)
      .join(', ');

    // Construct the full GraphQL query dynamically
    let query = `query {
      ${this.collection}(
        skip: ${params.startRow}
        take: ${params.endRow - params.startRow}
        ${filterQuery ? `where: { ${filterQuery} }` : ''}
        ${sortQuery ? `order: { ${sortQuery} }` : ''}
      ) {
        items {
          id
          ${visibleColumns.join(' ')}
        }
        totalCount
      }
    }`;
    
    console.log(query);
    return query;
  }

  private constructGqlCondition(filterObjects: AgGridFilter[], operator: ConditionalOperator | undefined): string {
    if (operator == undefined) {
      throw new Error(`Invalid conditional operator`);
    }
    return `{${operator.toLowerCase()}: [${filterObjects.map(x => `{${x.field}: {${this.getGqlFilterOperation(x.type)}: ${x.filter}}}`).join(' ')}]}`;
  }

  private getGqlFilterOperationKeyValuePair(filterObj: any): string {
    let filterValue1 = filterObj.filter;
    let filterValue2 = filterObj.filter;
    switch(filterObj.filterType) {
      case 'number':
        filterValue1 = `${filterObj.filter}`;
        filterValue2 = `${filterObj.filterTo ?? ''}`;
        break;
      case 'text':
        filterValue1 = `"${filterObj.filter}"`;
        break;
      case 'date':
        filterValue1 = `"${filterObj.dateFrom}"`;
        filterValue2 =  `"${filterObj.dateTo ? convertToEndOfDay(filterObj.dateTo) : ''}"`;
        break;
      default:
        filterValue1 = `${filterObj.filter}`;
    }

    if (filterObj.type == AgGridType.IN_RANGE) {
      return `${this.getGqlFilterOperation(AgGridType.GREATER_THAN_OR_EQUAL)}: ${filterValue1}, ${this.getGqlFilterOperation(AgGridType.LESS_THAN_OR_EQUAL)}: ${filterValue2}`;
    } else if(filterObj.type == AgGridType.BLANK || filterObj.type == AgGridType.NOT_BLANK) {
      return `${this.getGqlFilterOperation(filterObj.type)}: null`;
    } else {
      return `${this.getGqlFilterOperation(filterObj.type)}: ${filterValue1}`;
    }
  }

  private getGqlFilterValue(filterType: AgGridFilterType, filterValue: string | number | undefined): string {
    if (filterValue == undefined) {
      throw new Error(`Invalid filter value`);
    }

    switch (filterType) {
      case AgGridFilterType.NUMBER:
        return `${filterValue}`;
      case AgGridFilterType.TEXT:
      case AgGridFilterType.DATE:
        return `"${filterValue}"`;
      default:
        throw new Error(`Unsupported filterType: ${filterType}`);
    }
  }

  private getGqlFilterOperation(filterModelType: ISimpleFilterModelType | undefined): string {
    if (filterModelType == undefined) {
      throw new Error('Invalid filter type');
    }

    switch (filterModelType) {
      case AgGridType.EMPTY:
        return 'eq';
      case AgGridType.EQUALS:
        return 'eq';
      case AgGridType.NOT_EQUAL:
        return 'neq';
      case AgGridType.LESS_THAN:
        return 'lt';
      case AgGridType.LESS_THAN_OR_EQUAL:
        return 'lte';
      case AgGridType.GREATER_THAN:
        return 'gt';
      case AgGridType.GREATER_THAN_OR_EQUAL:
        return 'gte';
      case AgGridType.IN_RANGE:
        return 'equals';
      case AgGridType.CONTAINS:
        return 'contains';
      case AgGridType.NOT_CONTAINS:
        return 'ncontains';
      case AgGridType.STARTS_WITH:
        return 'startsWith';
      case AgGridType.ENDS_WITH:
        return 'endsWith';
      case AgGridType.BLANK:
        return 'eq';
      case AgGridType.NOT_BLANK:
        return 'neq';
      default:
        throw new Error('Invalid filter type');
    }
  }

}


