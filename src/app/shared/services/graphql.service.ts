import { Injectable } from '@angular/core';
import { GridApi, IGetRowsParams } from 'ag-grid-community';
import { ISimpleFilterModelType } from 'ag-grid-community/dist/types/core/filter/provided/simpleFilter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor() { }
}

export interface RemoteGridApi<T> {
  getData: (params: IGetRowsParams) 
             => Observable<{ data: T[];  totalRecords: number }>;
  getDataError?: (err: any) => void;
  gridApi?: GridApi<T>;
}

export function convertToEndOfDay(dateString: string | undefined): string {
  if (!dateString) {
    return '';
  }
  // Parse the input date string to a Date object
  const date = new Date(dateString);

  // Set the time to the end of the day
  date.setHours(23, 59, 59, 999);

  // Format the updated Date object back to the desired string format
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export interface AgGridFilter {
  filterType: AgGridFilterType,
  type?: ISimpleFilterModelType,
  filter?: number | string,
  filterTo?: number | string,
  dateFrom?: string,
  dateTo?: string,
  operator?: ConditionalOperator,
  condition1?: AgGridFilter,
  condition2?: AgGridFilter,
  conditions?: AgGridFilter[],

  field?: string,
}

export enum AgGridFilterType {
  NUMBER = 'number',
  TEXT = 'text',
  DATE = 'date',
}

export enum AgGridType {
  EMPTY = 'empty',
  EQUALS = 'equals',
  NOT_EQUAL = 'notEqual',
  LESS_THAN = 'lessThan',
  LESS_THAN_OR_EQUAL = 'lessThanOrEqual',
  GREATER_THAN = 'greaterThan',
  GREATER_THAN_OR_EQUAL = 'greaterThanOrEqual',
  IN_RANGE = 'inRange',
  CONTAINS = 'contains',
  NOT_CONTAINS = 'notContains',
  STARTS_WITH = 'startsWith',
  ENDS_WITH = 'endsWith',
  BLANK = 'blank',
  NOT_BLANK = 'notBlank'
}

export enum ConditionalOperator {
  AND = 'AND',
  OR = 'OR',
  // NOT = 'NOT',
}
