import { Injectable } from '@angular/core';
import { ColDef, GridApi, IGetRowsParams } from 'ag-grid-community';
import { ISimpleFilterModelType } from 'ag-grid-community/dist/types/core/filter/provided/simpleFilter';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client'
import { Apollo, gql, MutationResult } from 'apollo-angular';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

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

  createInputFormGroup<T>(inputDefs: InputDef<T>[]): FormGroup<any> {
    const group: any = {};
  
    inputDefs.forEach(x => {
      group[x.field] = [x.value, x.validators, x.asyncValidators];
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

export function formatCamelCaseText(input: string): string {
  // 1. Add space before each uppercase letter that follows a lowercase letter.
  const spaced = input.replace(/([a-z])([A-Z])/g, '$1 $2');

  // 2. Capitalize the first letter of each word.
  const capitalized = spaced.replace(/\b\w/g, char => char.toUpperCase());

  return capitalized;
}

export function capitalizeFirstLetter(string: string): string {
  if (!string.length) return '';
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export function toLowercaseFirstLetter(string: string): string {
  if (!string.length) return '';
  return `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
}

export function enumToArray(enumObj: any): { caption: string; value: string }[] {
  return Object.keys(enumObj)
    .filter(key => isNaN(Number(key))) // Filter out reverse mappings
    .map(key => ({
      caption: key.replace(/([A-Z])/g, ' $1').trim(), // Add space before each uppercase letter and trim the result
      value: enumObj[key]
    }));
}

export function calculateAge(dateOfBirth: string | null | undefined): Age {
  if (!dateOfBirth) {
    return {years: 0, months: 0, days: 0};
  }

  const dob = new Date(dateOfBirth);
  const today = new Date();
  
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

export function toDateOnlyString(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}


export interface AgGridFilter {
  filterType: AgGridFilterType,
  type?: ISimpleFilterModelType,

  filter?: number | string,
  filterTo?: number | string,
  dateFrom?: string,
  dateTo?: string,

  operator?: ConditionalOperator,
  conditions?: AgGridFilter[],
  condition1?: AgGridFilter,
  condition2?: AgGridFilter,

  value?: string[],
}

export enum AgGridFilterType {
  NUMBER = 'number',
  TEXT = 'text',
  DATE = 'date',
}

export enum ConditionalOperator {
  AND = 'AND',
  OR = 'OR',
  // NOT = 'NOT',
}

export enum GraphqlCollections {
  USERS = 'users',
  SCHOOLS = 'schools',
  SCHOOL_STUDENT_ENROLLMENT_REQUESTS = 'schoolStudentEnrollmentRequests',
  SCHOOL_STUDENT_ENROLLMENTS = 'schoolStudentEnrollments',
  CLASSES = 'classes',
  STUDENTS = 'students',
  TEACHERS = 'teachers',
}

export enum GraphqlTypes {
  USER = 'user',
  SCHOOL = 'school',
  SCHOOL_STUDENT_ENROLLMENT_REQUEST = 'schoolStudentEnrollmentRequest',
  SCHOOL_STUDENT_ENROLLMENT = 'schoolStudentEnrollment',
  CLASS = 'class',
  STUDENT = 'student',
  TEACHER = 'teacher',
}

export interface InputDef<T> {
  field: keyof T,
  type: 'text' | 'date' | 'email' | 'select' | 'textarea', // add more
  caption: string,

  value?: any,
  options?: Option[],
  class?: string,

  validators?: ValidatorFn[],
  asyncValidators?: ValidatorFn[],
}

export interface Option {
  caption: string,
  value: any,
}

export interface Age {
  years: number,
  months: number,
  days: number,
}