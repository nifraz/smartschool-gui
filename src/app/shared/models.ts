import { ISimpleFilterModelType } from 'ag-grid-community/dist/types/core/filter/provided/simpleFilter';
import { PersonModel, Sex } from '../../../graphql/generated';
import { AgGridFilterType, ConditionalOperator } from './enums';

export interface UserLoginRequest {
  email: string;
  mobileNo: string;
  password: string;
}

export interface UserRegisterRequest {
  email: string;
  mobileNo: string;
  password: string;
  password2: string;
  fullName: string;
  shortName: string;
  dateOfBirth: string | Date;
  sex: Sex;
}

export interface AuthenticateResponse {
  userId: number;
  fullName: string;
  email: string;
  mobileNo: string;
  isEmailVerified: boolean;
  isMobileNoVerified: boolean;
  token: string;
  expires: string;
}

export interface VerifyRequest {
  email?: string | null;
  emailOtp?: string | null;
  emailToken?: string | null;

  mobileNo?: string | null;
  mobileNoOtp?: string | null;
  mobileNoToken?: string | null;
}


export interface UserResponse {
  id: number;
  email?: string | null;
  isEmailVerified: boolean;
  mobileNo?: string | null;
  isMobileNoVerified: boolean;
}

export interface AgGridFilter {
  filterType: AgGridFilterType;
  type?: ISimpleFilterModelType;

  filter?: number | string;
  filterTo?: number | string;
  dateFrom?: string;
  dateTo?: string;

  operator?: ConditionalOperator;
  conditions?: AgGridFilter[];
  condition1?: AgGridFilter;
  condition2?: AgGridFilter;

  value?: string[];
}

export interface Age {
  years: number;
  months: number;
  days: number;
}

export interface FormlyOption {
  value: any | undefined;
  label: any | undefined;
}
