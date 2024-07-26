import { Injectable } from '@angular/core';
import { ColDef, GridApi, IGetRowsParams } from 'ag-grid-community';
import { ISimpleFilterModelType } from 'ag-grid-community/dist/types/core/filter/provided/simpleFilter';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client'
import { Apollo, gql, MutationResult } from 'apollo-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo,
  ) { }

  saveState(key: string, state: any): void {
    localStorage.setItem(key, JSON.stringify(state));
  }

  getState(key: string): any {
    const state = localStorage.getItem(key);
    return state ? JSON.parse(state) : null;
  }

  clearState(key: string): void {
    localStorage.removeItem(key);
  }
  
  getGqlQueryObservable(query: string, variables: any = undefined): Observable<ApolloQueryResult<any>> {
    return this.apollo
      .watchQuery<any>({ 
        query: gql `${query}`,
        variables: variables,
      })
      .valueChanges;
  }

  getGqlMutationObservable(mutation: string, variables: any, refetchQueries: string[]): Observable<MutationResult<any>> {
    return this.apollo.mutate<any>({
      mutation: gql `${mutation}`,
      variables: variables,
      refetchQueries: refetchQueries
    });
  }

  createColDefs<T extends object>(model: T): ColDef[] {
    const colDefs: ColDef[] = [];
  
    Object.keys(model).forEach(key => {
      colDefs.push({
        headerName: key.charAt(0).toUpperCase() + key.slice(1),
        field: key,
        sortable: true,
        filter: true,
      });
    });
  
    return colDefs;
  }

  createInputFormGroup(model: any): FormGroup<any> {
    const group: any = {};
  
    Object.keys(model).forEach(key => {
      // if (typeof model[key] === 'string') {
      //   group[key] = [model[key]];
      // } else if (typeof model[key] === 'number') {
      //   group[key] = [model[key]];
      // } else if (model[key] instanceof Date) {
      //   group[key] = [model[key]];
      // } else {
      //   group[key] = [model[key]];
      // }
      group[key] = [model[key], ];
    });
  
    return this.formBuilder.group(group);
  }
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

export function capitalizeFirstLetter(string: string): string {
  if (!string.length) return '';
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export function toLowercaseFirstLetter(string: string): string {
  if (!string.length) return '';
  return `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
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

export enum GraphqlCollections {
  STUDENTS = 'students',
  TEACHERS = 'teachers',
}

export enum GraphqlTypes {
  STUDENT = 'student',
  TEACHER = 'teacher',
}
