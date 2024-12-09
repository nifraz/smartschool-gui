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
  SortModelItem,
} from 'ag-grid-community'; // Column Definition Type Interface
import { Observable, catchError, map, of } from 'rxjs';
import { GraphqlService, RemoteGridApi, capitalizeFirstLetter, formatCamelCaseText } from '../services/graphql.service';
import { RemoteGridBindingDirective } from '../directives/remote-grid-binding.directive';
import { ISimpleFilterModelType } from 'ag-grid-community/dist/types/core/filter/provided/simpleFilter';
import { gql, TypedDocumentNode } from 'apollo-angular';
import { ConditionalOperator, AgGridFilterType } from '../enums';
import { AgGridFilter } from '../models';
import { DocumentNode } from 'graphql';

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
  themeClass: string = "ag-theme-material";
  
  @Input()title?: string;
  @Input()collection: string = '';
  @Input()colDefs: ColDef<T>[] = [];
  
  @Input()initialFilterModel?: {[key: string]: AgGridFilter};
  @Input()initialSortModel?: {sortModel: SortModelItem[]};

  @Output()recordClicked: EventEmitter<T> = new EventEmitter<T>();
  @Output()addNewClicked: EventEmitter<void> = new EventEmitter<void>();

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    suppressHeaderMenuButton: true,
    suppressHeaderContextMenu: true,
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
    this.title = this.title ?? `${formatCamelCaseText(this.collection)} Data`;
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

  onRefresh(): void {
    this.gridApi?.refreshInfiniteCache();
  }

  onReset(): void {
    this.gridApi?.setFilterModel({});
    this.gridApi?.resetColumnState();
  }

  onNew(): void {
    this.addNewClicked.emit();
  }

  onExport(): void {
    this.gridApi?.exportDataAsCsv();
  }

  onToggleColumns(): void {
    // const allColumns = this.gridOptions.columnApi?.getAllColumns();
    // if (allColumns) {
    //   allColumns.forEach(column => {
    //     const isVisible = this.gridOptions.columnApi?.getColumnState().find(col => col.colId === column.getColId())?.hide;
    //     this.gridOptions.columnApi?.setColumnVisible(column, !isVisible);
    //   });
    // }
  }

  onAutosizeColumns(): void {
    // const allColumnIds = this.gridOptions.columnApi?.getAllColumns().map(column => column.getColId());
    // if (allColumnIds) {
    //   this.gridOptions.columnApi?.autoSizeColumns(allColumnIds);
    // }
  }

  // onSaveState(): void {
  //   const gridState = this.gridOptions.api?.getColumnState();
  //   localStorage.setItem('gridState', JSON.stringify(gridState));
  // }

  // onLoadState(): void {
  //   const gridState = localStorage.getItem('gridState');
  //   if (gridState) {
  //     this.gridOptions.api?.applyColumnState({
  //       state: JSON.parse(gridState),
  //       applyOrder: true
  //     });
  //   }
  // }

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

  private getFilterKeyValuePair(field: string, type: ISimpleFilterModelType, value: string | number): string {
    return `{${field}: {${this.convertToGqlFilterInput(type)}: ${value}}}`;
  }

  private getMultiSelectFilterKeyValuePair(field: string, values: string[]): string {
    return `{${field}: {in: [${values.join(', ')}]}}`;
  }

  private getFilterConditionalOperation(keyValuePairs: string[], operator: ConditionalOperator): string {
    if (!keyValuePairs.length) return '';
    return `${operator.toLowerCase()}: [${keyValuePairs.join(', ')}]`;
  }

  private getFilterValue(agGridFilter: AgGridFilter): string {
    const value = agGridFilter.filterType == AgGridFilterType.DATE ? agGridFilter.dateFrom : agGridFilter.filter;
    if (value != undefined) {
      return this.getFilterValueFormatted(agGridFilter.filterType, value);
    }
    return '';
  }

  private getFilterValues(agGridFilter: AgGridFilter): [string, string] {
    const value1 = agGridFilter.filterType == AgGridFilterType.DATE ? agGridFilter.dateFrom : agGridFilter.filter;
    const value2 = agGridFilter.filterType == AgGridFilterType.DATE ? agGridFilter.dateTo : agGridFilter.filterTo;
    if (value1 != undefined && value2 != undefined) {
      return [this.getFilterValueFormatted(agGridFilter.filterType, value1), this.getFilterValueFormatted(agGridFilter.filterType, value2)];
    }
    return ['', ''];
  }

  private getFilterValueFormatted(filterType: AgGridFilterType, filterValue: string | number): string {
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

  private getFilterField(field: string, agGridFilter: AgGridFilter): string {
    if (agGridFilter.type) {
      if (agGridFilter.type == 'inRange') {
        const [value1, value2] = this.getFilterValues(agGridFilter);
        const filterKeyValuePair1 = this.getFilterKeyValuePair(field, 'greaterThanOrEqual', value1);
        const filterKeyValuePair2 = this.getFilterKeyValuePair(field, 'lessThanOrEqual', value2);
        return `{${this.getFilterConditionalOperation([filterKeyValuePair1, filterKeyValuePair2], ConditionalOperator.AND)}}`;
      }
      else if (agGridFilter.type == 'empty') {
        return this.getFilterKeyValuePair(field, agGridFilter.type, '""');
      }
      else if (agGridFilter.type == 'blank' || agGridFilter.type == 'notBlank') {
        return this.getFilterKeyValuePair(field, agGridFilter.type, 'null');
      }
      const value = this.getFilterValue(agGridFilter);
      return this.getFilterKeyValuePair(field, agGridFilter.type, value);
    }
    else if (agGridFilter.condition1 && agGridFilter.condition2 && agGridFilter.operator) {
      const fieldFilter1 = this.getFilterField(field, agGridFilter.condition1);
      const fieldFilter2 = this.getFilterField(field, agGridFilter.condition2);
      return `{${this.getFilterConditionalOperation([fieldFilter1, fieldFilter2], agGridFilter.operator)}}`;
    }
    else if (agGridFilter.value?.length) {
      return this.getMultiSelectFilterKeyValuePair(field, agGridFilter.value);
    }
    throw new Error(`Invalid AgGridFilter: ${JSON.stringify(agGridFilter)}`);
  }

  private getFilterQuery(filterModel: {[key: string]: AgGridFilter}): string {
    const filterFields = Object.entries(filterModel)
      .map(([field, agGridFilter]) => this.getFilterField(field, agGridFilter));
    if (this.initialFilterModel) {
      const initialFilterFields = Object.entries(this.initialFilterModel)
        .map(([field, agGridFilter]) => this.getFilterField(field, agGridFilter));
      filterFields.push(...initialFilterFields);
    }
    return this.getFilterConditionalOperation(filterFields, ConditionalOperator.AND);
  }

  private getSortQuery(sortModel: SortModelItem[]): string {
    return sortModel
      .map(column => `${column.colId}: ${column.sort.toUpperCase()}`)
      .join(', ');
  }

  constructQuery(params: IGetRowsParams): DocumentNode | TypedDocumentNode<any, any> {
    const filterModel: {[key: string]: AgGridFilter} = params.filterModel;
    const sortModel = params.sortModel;
    const visibleColumns = this.gridApi?.getAllDisplayedColumns().map(col => col.getColId()).filter(colId => colId != 'id') || [];

    const filterQuery = this.getFilterQuery(filterModel);
    const sortQuery = this.getSortQuery(sortModel);

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
          ${this.buildProjectionFields(this.buildProjectionHierarchy(visibleColumns))}
        }
        totalCount
      }
    }`;
    
    console.log(query);
    return gql`${query}`;
  }

  private buildProjectionHierarchy(fieldArray: string[]): any {
    const hierarchy: any = {};
  
    fieldArray.forEach(field => {
      const parts = field.split('.');
      let currentLevel = hierarchy;
  
      parts.forEach((part, index) => {
        if (!currentLevel[part]) {
          currentLevel[part] = index === parts.length - 1 ? null : {}; // Leaf node is null
        }
        currentLevel = currentLevel[part];
      });
    });
  
    return hierarchy;
  }
  
  private buildProjectionFields(hierarchy: any): string {
    return Object.entries(hierarchy)
      .map(([key, value]) => {
        if (value === null) {
          return key; // Leaf node
        }
        return `${key} { ${this.buildProjectionFields(value)} }`; // Recursive for nested fields
      })
      .join(' ');
  }

  private convertToGqlFilterInput(filterModelType: ISimpleFilterModelType): string {
    switch (filterModelType) {
      case 'empty':
        return 'eq';
      case 'equals':
        return 'eq';
      case 'notEqual':
        return 'neq';
      case 'lessThan':
        return 'lt';
      case 'lessThanOrEqual':
        return 'lte';
      case 'greaterThan':
        return 'gt';
      case 'greaterThanOrEqual':
        return 'gte';
      case 'inRange':
        return 'equals';
      case 'contains':
        return 'contains';
      case 'notContains':
        return 'ncontains';
      case 'startsWith':
        return 'startsWith';
      case 'endsWith':
        return 'endsWith';
      case 'blank':
        return 'eq';
      case 'notBlank':
        return 'neq';
      default:
        throw new Error('Invalid filter type');
    }
  }

}


