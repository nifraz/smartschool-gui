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
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client'
import { Observable, catchError, map, of } from 'rxjs';
import { AgGridFilterType, RemoteGridApi, convertToEndOfDay } from '../services/graphql.service';
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
  
  @Input()queryName: string = '';
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
    // onSortChanged: x => this.onGridChange(x),
    // onFilterChanged: x => this.onGridChange(x),
    // onColumnVisible: x => this.onGridChange(x),
    // onPaginationChanged: x => this.onGridChange(x),
  };

  gridApi?: GridApi<T>;
  remoteGridBinding = this;

  constructor(private apollo: Apollo) {}
  
  ngOnInit(): void {
    console.log('graphql');
  }
    
  onRowClicked($event: RowClickedEvent<T,any>) {
    this.recordClicked.emit($event.data);
  }
  
  getData(params: IGetRowsParams): Observable<{ data: T[]; totalRecords: number }> {
    this.gridApi?.showLoadingOverlay();
    const query = this.constructQuery(params);
    return this.getGqlObservable(query).pipe(
      map(res => {
        this.gridApi?.hideOverlay()
        return {
          data: res.data[this.queryName].items,
          totalRecords: res.data[this.queryName].totalCount,
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
  }

  // onGridChange(event: AgGridEvent<T, any>): void {
  //   this.fetchData(event.api);
  // }

  getGqlObservable(query: string): Observable<ApolloQueryResult<any>> {
    return this.apollo
      .watchQuery<any>({ query: gql `${query}`, })
      .valueChanges;
  }

  constructQuery(params: IGetRowsParams): string {
    const filterModel = params.filterModel;
    const sortModel = params.sortModel;
    const visibleColumns = this.gridApi?.getAllDisplayedColumns().map(col => col.getColId()).filter(colId => colId != 'id') || [];

    // Construct filtering part of the query
    const filterQuery = Object.entries(filterModel)
      .map(([colId, filter]) => {
        const filterObj: any = filter;
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

        if (filterObj.type == AgGridFilterType.IN_RANGE) {
          return `${colId}: { ${this.getGqlFilterOperation(AgGridFilterType.GREATER_THAN_OR_EQUAL)}: ${filterValue1}, ${this.getGqlFilterOperation(AgGridFilterType.LESS_THAN_OR_EQUAL)}: ${filterValue2} }`;
        } else if(filterObj.type == AgGridFilterType.BLANK || filterObj.type == AgGridFilterType.NOT_BLANK) {
          return `${colId}: { ${this.getGqlFilterOperation(filterObj.type)}: null }`;
        } else {
          return `${colId}: { ${this.getGqlFilterOperation(filterObj.type)}: ${filterValue1} }`;
        }
      })
      .filter(Boolean)
      .join(', ');

    // Construct sorting part of the query
    const sortQuery = sortModel
      .map(column => `${column.colId}: ${column.sort.toUpperCase()}`)
      .filter(Boolean)
      .join(', ');

    // Construct the full GraphQL query dynamically
    let query = `query {
      ${this.queryName}(
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

  getGqlFilterOperation(filterModelType: ISimpleFilterModelType): string {
    let filterOperation: string = '';
    switch (filterModelType) {
      case AgGridFilterType.EMPTY:
        // filterOperation = 'eq';
        break;
      case AgGridFilterType.EQUALS:
        filterOperation = 'eq';
        break;
      case AgGridFilterType.NOT_EQUAL:
        filterOperation = 'neq';
        break;
      case AgGridFilterType.LESS_THAN:
        filterOperation = 'lt';
        break;
      case AgGridFilterType.LESS_THAN_OR_EQUAL:
        filterOperation = 'lte';
        break;
      case AgGridFilterType.GREATER_THAN:
        filterOperation = 'gt';
        break;
      case AgGridFilterType.GREATER_THAN_OR_EQUAL:
        filterOperation = 'gte';
        break;
      case AgGridFilterType.IN_RANGE:
        // filterOperation = 'equals';
        break;
      case AgGridFilterType.CONTAINS:
        filterOperation = 'contains';
        break;
      case AgGridFilterType.NOT_CONTAINS:
        filterOperation = 'ncontains';
        break;
      case AgGridFilterType.STARTS_WITH:
        filterOperation = 'startsWith';
        break;
      case AgGridFilterType.ENDS_WITH:
        filterOperation = 'endsWith';
        break;
      case AgGridFilterType.BLANK:
        filterOperation = 'eq';
        break;
      case AgGridFilterType.NOT_BLANK:
        filterOperation = 'neq';
        break;
      default:
        filterOperation = '';
    }
    return filterOperation;
  }

}


