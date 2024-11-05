import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: { input: any; output: any; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
};

export type DateOperationFilterInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
  ngt?: InputMaybe<Scalars['Date']['input']>;
  ngte?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  nlt?: InputMaybe<Scalars['Date']['input']>;
  nlte?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LongOperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  neq?: InputMaybe<Scalars['Long']['input']>;
  ngt?: InputMaybe<Scalars['Long']['input']>;
  ngte?: InputMaybe<Scalars['Long']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  nlt?: InputMaybe<Scalars['Long']['input']>;
  nlte?: InputMaybe<Scalars['Long']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createStudent: StudentType;
  updateStudent: StudentType;
};


export type MutationCreateStudentArgs = {
  input: StudentInput;
};


export type MutationUpdateStudentArgs = {
  id: Scalars['Long']['input'];
  input: StudentInput;
};

export type NullableOfSexOperationFilterInput = {
  eq?: InputMaybe<Sex>;
  in?: InputMaybe<Array<InputMaybe<Sex>>>;
  neq?: InputMaybe<Sex>;
  nin?: InputMaybe<Array<InputMaybe<Sex>>>;
};

export type Query = {
  __typename?: 'Query';
  student?: Maybe<StudentType>;
  students?: Maybe<StudentsCollectionSegment>;
};


export type QueryStudentArgs = {
  id: Scalars['Long']['input'];
};


export type QueryStudentsArgs = {
  order?: InputMaybe<Array<StudentTypeSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StudentTypeFilterInput>;
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE',
  NotApplicable = 'NOT_APPLICABLE',
  NotKnown = 'NOT_KNOWN'
}

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StudentInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bcNo?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  nicNo?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  passportNo?: InputMaybe<Scalars['String']['input']>;
  sex: Sex;
  shortName: Scalars['String']['input'];
};

export type StudentType = {
  __typename?: 'StudentType';
  address?: Maybe<Scalars['String']['output']>;
  bcNo?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Sex>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export type StudentTypeFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<StudentTypeFilterInput>>;
  bcNo?: InputMaybe<StringOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  dateOfBirth?: InputMaybe<DateOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<StudentTypeFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  sex?: InputMaybe<NullableOfSexOperationFilterInput>;
  shortName?: InputMaybe<StringOperationFilterInput>;
};

export type StudentTypeSortInput = {
  address?: InputMaybe<SortEnumType>;
  bcNo?: InputMaybe<SortEnumType>;
  createdTime?: InputMaybe<SortEnumType>;
  createdUserId?: InputMaybe<SortEnumType>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  guid?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  mobileNo?: InputMaybe<SortEnumType>;
  nicNo?: InputMaybe<SortEnumType>;
  nickname?: InputMaybe<SortEnumType>;
  passportNo?: InputMaybe<SortEnumType>;
  sex?: InputMaybe<SortEnumType>;
  shortName?: InputMaybe<SortEnumType>;
};

/** A segment of a collection. */
export type StudentsCollectionSegment = {
  __typename?: 'StudentsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<StudentType>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};
