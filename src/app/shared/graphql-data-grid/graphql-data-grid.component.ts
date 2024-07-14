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
import { Observable, map } from 'rxjs';
import { RemoteGridApi } from '../services/graphql.service';
import { RemoteGridBindingDirective } from '../directives/remote-grid-binding.directive';

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
    const query = this.constructQuery(params);
    return this.getGqlObservable(query).pipe(
      map(res => ({
        data: res.data[this.queryName].items,
        totalRecords: res.data[this.queryName].totalCount,
      })),
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
        const column: any = filter;
        switch(column.filterType) {
          case 'text':
            switch(column.type) {
              case 'contains':
                return `${colId}: { contains: "${column.filter}" }`;
              default:
                return '';
            }
          case 'number':
            switch(column.type) {
              case 'equals':
                return `${colId}: { eq: ${column.filter} }`;
              default:
                return '';
            }
          default:
            return '';
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

    return query;
  }


}


