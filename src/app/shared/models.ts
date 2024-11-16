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
  token: string;
  expires: string;
}

export interface RegisterResponse {
  id: number;
  fullName: string;
  shortName: string;
  nickname?: string | null;
  dateOfBirth?: string | null;
  bcNo?: string | null;
  sex: Sex;
  nicNo?: string | null;
  passportNo?: string | null;
  mobileNo?: string | null;
  email?: string | null;
  address?: string | null;
  image?: string | null;

  isEmailVerified: boolean;
  isMobileNoVerified: boolean;
}

export interface VerifyEmailRequest {
  email: string;
  otp: string;
  token: string;
}

export interface VerifyEmailResponse {
  email: string;
  isEmailVerified: boolean;
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
