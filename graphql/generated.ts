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

export type AgeModel = {
  __typename?: 'AgeModel';
  days: Scalars['Int']['output'];
  months: Scalars['Int']['output'];
  years: Scalars['Int']['output'];
};

export type AgeModelFilterInput = {
  and?: InputMaybe<Array<AgeModelFilterInput>>;
  days?: InputMaybe<IntOperationFilterInput>;
  months?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<AgeModelFilterInput>>;
  years?: InputMaybe<IntOperationFilterInput>;
};

export type AgeModelSortInput = {
  days?: InputMaybe<SortEnumType>;
  months?: InputMaybe<SortEnumType>;
  years?: InputMaybe<SortEnumType>;
};

export type ClassModel = {
  __typename?: 'ClassModel';
  classStudentEnrollments: Array<ClassStudentEnrollmentModel>;
  classTeacherEnrollments: Array<ClassTeacherEnrollmentModel>;
  grade?: Maybe<Grade>;
  languageCode?: Maybe<Scalars['String']['output']>;
  languageName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  section?: Maybe<Scalars['String']['output']>;
};

export type ClassModelFilterInput = {
  and?: InputMaybe<Array<ClassModelFilterInput>>;
  classStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentModelFilterInput>;
  classTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentModelFilterInput>;
  grade?: InputMaybe<NullableOfGradeOperationFilterInput>;
  languageCode?: InputMaybe<StringOperationFilterInput>;
  languageName?: InputMaybe<StringOperationFilterInput>;
  location?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClassModelFilterInput>>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  section?: InputMaybe<StringOperationFilterInput>;
};

export type ClassStudentEnrollmentModel = {
  __typename?: 'ClassStudentEnrollmentModel';
  academicYear?: Maybe<Scalars['Int']['output']>;
  classId?: Maybe<Scalars['Long']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  removeReason?: Maybe<Scalars['String']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  rollNo?: Maybe<Scalars['Int']['output']>;
  schoolStudentEnrollmentId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<EnrollmentStatus>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type ClassStudentEnrollmentModelFilterInput = {
  academicYear?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<ClassStudentEnrollmentModelFilterInput>>;
  classId?: InputMaybe<LongOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  or?: InputMaybe<Array<ClassStudentEnrollmentModelFilterInput>>;
  removeReason?: InputMaybe<StringOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  rollNo?: InputMaybe<IntOperationFilterInput>;
  schoolStudentEnrollmentId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ClassTeacherEnrollmentModel = {
  __typename?: 'ClassTeacherEnrollmentModel';
  academicYear?: Maybe<Scalars['Int']['output']>;
  classId?: Maybe<Scalars['Long']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  removedReason?: Maybe<Scalars['String']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  schoolTeacherEnrollmentId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<EnrollmentStatus>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type ClassTeacherEnrollmentModelFilterInput = {
  academicYear?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<ClassTeacherEnrollmentModelFilterInput>>;
  classId?: InputMaybe<LongOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  or?: InputMaybe<Array<ClassTeacherEnrollmentModelFilterInput>>;
  removedReason?: InputMaybe<StringOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  schoolTeacherEnrollmentId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
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

export enum EnrollmentStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Left = 'LEFT',
  Rejoined = 'REJOINED',
  Resigned = 'RESIGNED',
  Retired = 'RETIRED',
  Unknown = 'UNKNOWN'
}

export enum Grade {
  Grade1 = 'GRADE1',
  Grade2 = 'GRADE2',
  Grade3 = 'GRADE3',
  Grade4 = 'GRADE4',
  Grade5 = 'GRADE5',
  Grade6 = 'GRADE6',
  Grade7 = 'GRADE7',
  Grade8 = 'GRADE8',
  Grade9 = 'GRADE9',
  Grade10 = 'GRADE10',
  Grade11 = 'GRADE11',
  Grade12 = 'GRADE12',
  Grade13 = 'GRADE13',
  None = 'NONE'
}

export type GradeOperationFilterInput = {
  eq?: InputMaybe<Grade>;
  in?: InputMaybe<Array<Grade>>;
  neq?: InputMaybe<Grade>;
  nin?: InputMaybe<Array<Grade>>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfClassModelFilterInput = {
  all?: InputMaybe<ClassModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassModelFilterInput>;
  some?: InputMaybe<ClassModelFilterInput>;
};

export type ListFilterInputTypeOfClassStudentEnrollmentModelFilterInput = {
  all?: InputMaybe<ClassStudentEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassStudentEnrollmentModelFilterInput>;
  some?: InputMaybe<ClassStudentEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfClassTeacherEnrollmentModelFilterInput = {
  all?: InputMaybe<ClassTeacherEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassTeacherEnrollmentModelFilterInput>;
  some?: InputMaybe<ClassTeacherEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfSchoolPrincipalEnrollmentModelFilterInput = {
  all?: InputMaybe<SchoolPrincipalEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolPrincipalEnrollmentModelFilterInput>;
  some?: InputMaybe<SchoolPrincipalEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfSchoolStudentEnrollmentModelFilterInput = {
  all?: InputMaybe<SchoolStudentEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolStudentEnrollmentModelFilterInput>;
  some?: InputMaybe<SchoolStudentEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput = {
  all?: InputMaybe<SchoolStudentEnrollmentRequestModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolStudentEnrollmentRequestModelFilterInput>;
  some?: InputMaybe<SchoolStudentEnrollmentRequestModelFilterInput>;
};

export type ListFilterInputTypeOfSchoolTeacherEnrollmentModelFilterInput = {
  all?: InputMaybe<SchoolTeacherEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolTeacherEnrollmentModelFilterInput>;
  some?: InputMaybe<SchoolTeacherEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfSchoolTeacherEnrollmentRequestModelFilterInput = {
  all?: InputMaybe<SchoolTeacherEnrollmentRequestModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolTeacherEnrollmentRequestModelFilterInput>;
  some?: InputMaybe<SchoolTeacherEnrollmentRequestModelFilterInput>;
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
  createStudent: StudentModel;
  updateStudent: StudentModel;
};


export type MutationCreateStudentArgs = {
  input: StudentInput;
};


export type MutationUpdateStudentArgs = {
  id: Scalars['Long']['input'];
  input: StudentInput;
};

export type NullableOfEnrollmentStatusOperationFilterInput = {
  eq?: InputMaybe<EnrollmentStatus>;
  in?: InputMaybe<Array<InputMaybe<EnrollmentStatus>>>;
  neq?: InputMaybe<EnrollmentStatus>;
  nin?: InputMaybe<Array<InputMaybe<EnrollmentStatus>>>;
};

export type NullableOfGradeOperationFilterInput = {
  eq?: InputMaybe<Grade>;
  in?: InputMaybe<Array<InputMaybe<Grade>>>;
  neq?: InputMaybe<Grade>;
  nin?: InputMaybe<Array<InputMaybe<Grade>>>;
};

export type NullableOfRequestStatusOperationFilterInput = {
  eq?: InputMaybe<RequestStatus>;
  in?: InputMaybe<Array<InputMaybe<RequestStatus>>>;
  neq?: InputMaybe<RequestStatus>;
  nin?: InputMaybe<Array<InputMaybe<RequestStatus>>>;
};

export type NullableOfSchoolTypeOperationFilterInput = {
  eq?: InputMaybe<SchoolType>;
  in?: InputMaybe<Array<InputMaybe<SchoolType>>>;
  neq?: InputMaybe<SchoolType>;
  nin?: InputMaybe<Array<InputMaybe<SchoolType>>>;
};

export type NullableOfSexOperationFilterInput = {
  eq?: InputMaybe<Sex>;
  in?: InputMaybe<Array<InputMaybe<Sex>>>;
  neq?: InputMaybe<Sex>;
  nin?: InputMaybe<Array<InputMaybe<Sex>>>;
};

export type Query = {
  __typename?: 'Query';
  school?: Maybe<SchoolModel>;
  schools?: Maybe<SchoolsCollectionSegment>;
  student?: Maybe<StudentModel>;
  students?: Maybe<StudentsCollectionSegment>;
  teacher?: Maybe<TeacherModel>;
  teachers?: Maybe<TeachersCollectionSegment>;
};


export type QuerySchoolArgs = {
  id: Scalars['Long']['input'];
};


export type QuerySchoolsArgs = {
  order?: InputMaybe<Array<SchoolModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchoolModelFilterInput>;
};


export type QueryStudentArgs = {
  id: Scalars['Long']['input'];
};


export type QueryStudentsArgs = {
  order?: InputMaybe<Array<StudentModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StudentModelFilterInput>;
};


export type QueryTeacherArgs = {
  id: Scalars['Long']['input'];
};


export type QueryTeachersArgs = {
  order?: InputMaybe<Array<TeacherModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeacherModelFilterInput>;
};

export enum RequestStatus {
  Approved = 'APPROVED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Rejected = 'REJECTED',
  Unknown = 'UNKNOWN'
}

export type SchoolModel = {
  __typename?: 'SchoolModel';
  address?: Maybe<Scalars['String']['output']>;
  censusNo?: Maybe<Scalars['String']['output']>;
  classes: Array<ClassModel>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  division?: Maybe<Scalars['String']['output']>;
  divisionId?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNo?: Maybe<Scalars['String']['output']>;
  schoolPrincipalEnrollments: Array<SchoolPrincipalEnrollmentModel>;
  schoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  schoolStudentEnrollments: Array<SchoolStudentEnrollmentModel>;
  schoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequestModel>;
  schoolTeacherEnrollments: Array<SchoolTeacherEnrollmentModel>;
  type?: Maybe<SchoolType>;
};

export type SchoolModelFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<SchoolModelFilterInput>>;
  censusNo?: InputMaybe<StringOperationFilterInput>;
  classes?: InputMaybe<ListFilterInputTypeOfClassModelFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  division?: InputMaybe<StringOperationFilterInput>;
  divisionId?: InputMaybe<IntOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolModelFilterInput>>;
  phoneNo?: InputMaybe<StringOperationFilterInput>;
  schoolPrincipalEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolPrincipalEnrollmentModelFilterInput>;
  schoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  schoolStudentEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentModelFilterInput>;
  schoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestModelFilterInput>;
  schoolTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentModelFilterInput>;
  type?: InputMaybe<NullableOfSchoolTypeOperationFilterInput>;
};

export type SchoolModelSortInput = {
  address?: InputMaybe<SortEnumType>;
  censusNo?: InputMaybe<SortEnumType>;
  createdTime?: InputMaybe<SortEnumType>;
  createdUserId?: InputMaybe<SortEnumType>;
  division?: InputMaybe<SortEnumType>;
  divisionId?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  guid?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  phoneNo?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
};

export type SchoolPrincipalEnrollmentModel = {
  __typename?: 'SchoolPrincipalEnrollmentModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no?: Maybe<Scalars['Int']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  schoolName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<EnrollmentStatus>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type SchoolPrincipalEnrollmentModelFilterInput = {
  and?: InputMaybe<Array<SchoolPrincipalEnrollmentModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<SchoolPrincipalEnrollmentModelFilterInput>>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  schoolName?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type SchoolStudentEnrollmentModel = {
  __typename?: 'SchoolStudentEnrollmentModel';
  classStudentEnrollments: Array<ClassStudentEnrollmentModel>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no?: Maybe<Scalars['Int']['output']>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  schoolName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<EnrollmentStatus>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type SchoolStudentEnrollmentModelFilterInput = {
  and?: InputMaybe<Array<SchoolStudentEnrollmentModelFilterInput>>;
  classStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentModelFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<SchoolStudentEnrollmentModelFilterInput>>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  schoolName?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type SchoolStudentEnrollmentRequestModel = {
  __typename?: 'SchoolStudentEnrollmentRequestModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  grade?: Maybe<Grade>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  personId?: Maybe<Scalars['Long']['output']>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<RequestStatus>;
};

export type SchoolStudentEnrollmentRequestModelFilterInput = {
  and?: InputMaybe<Array<SchoolStudentEnrollmentRequestModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  grade?: InputMaybe<NullableOfGradeOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  or?: InputMaybe<Array<SchoolStudentEnrollmentRequestModelFilterInput>>;
  personId?: InputMaybe<LongOperationFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfRequestStatusOperationFilterInput>;
};

export type SchoolTeacherEnrollmentModel = {
  __typename?: 'SchoolTeacherEnrollmentModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no?: Maybe<Scalars['Int']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  schoolName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<EnrollmentStatus>;
  teacherClassEnrollments: Array<ClassTeacherEnrollmentModel>;
  teacherId?: Maybe<Scalars['Long']['output']>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type SchoolTeacherEnrollmentModelFilterInput = {
  and?: InputMaybe<Array<SchoolTeacherEnrollmentModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<SchoolTeacherEnrollmentModelFilterInput>>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  schoolName?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  teacherClassEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentModelFilterInput>;
  teacherId?: InputMaybe<LongOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type SchoolTeacherEnrollmentRequestModel = {
  __typename?: 'SchoolTeacherEnrollmentRequestModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  grade: Grade;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  personId?: Maybe<Scalars['Long']['output']>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<RequestStatus>;
};

export type SchoolTeacherEnrollmentRequestModelFilterInput = {
  and?: InputMaybe<Array<SchoolTeacherEnrollmentRequestModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  grade?: InputMaybe<GradeOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  or?: InputMaybe<Array<SchoolTeacherEnrollmentRequestModelFilterInput>>;
  personId?: InputMaybe<LongOperationFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfRequestStatusOperationFilterInput>;
};

export enum SchoolType {
  NotSet = 'NOT_SET',
  Type1Ab = 'TYPE1_AB',
  Type1C = 'TYPE1_C',
  Type2 = 'TYPE2',
  Type3I = 'TYPE3I',
  Type3Ii = 'TYPE3II'
}

/** A segment of a collection. */
export type SchoolsCollectionSegment = {
  __typename?: 'SchoolsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<SchoolModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
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
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  nicNo?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  passportNo?: InputMaybe<Scalars['String']['input']>;
  sex: Sex;
  shortName: Scalars['String']['input'];
};

export type StudentModel = {
  __typename?: 'StudentModel';
  address?: Maybe<Scalars['String']['output']>;
  age?: Maybe<AgeModel>;
  bcNo?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  schoolStudentEnrollments: Array<SchoolStudentEnrollmentModel>;
  sex?: Maybe<Sex>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export type StudentModelFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  age?: InputMaybe<AgeModelFilterInput>;
  and?: InputMaybe<Array<StudentModelFilterInput>>;
  bcNo?: InputMaybe<StringOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  dateOfBirth?: InputMaybe<DateOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<StudentModelFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  schoolStudentEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentModelFilterInput>;
  sex?: InputMaybe<NullableOfSexOperationFilterInput>;
  shortName?: InputMaybe<StringOperationFilterInput>;
};

export type StudentModelSortInput = {
  address?: InputMaybe<SortEnumType>;
  age?: InputMaybe<AgeModelSortInput>;
  bcNo?: InputMaybe<SortEnumType>;
  createdTime?: InputMaybe<SortEnumType>;
  createdUserId?: InputMaybe<SortEnumType>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  guid?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  image?: InputMaybe<SortEnumType>;
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
  items?: Maybe<Array<StudentModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type TeacherModel = {
  __typename?: 'TeacherModel';
  address?: Maybe<Scalars['String']['output']>;
  age?: Maybe<AgeModel>;
  bcNo?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  guid?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  schoolTeacherEnrollments: Array<SchoolTeacherEnrollmentModel>;
  sex?: Maybe<Sex>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export type TeacherModelFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  age?: InputMaybe<AgeModelFilterInput>;
  and?: InputMaybe<Array<TeacherModelFilterInput>>;
  bcNo?: InputMaybe<StringOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  dateOfBirth?: InputMaybe<DateOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  guid?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TeacherModelFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  schoolTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentModelFilterInput>;
  sex?: InputMaybe<NullableOfSexOperationFilterInput>;
  shortName?: InputMaybe<StringOperationFilterInput>;
};

export type TeacherModelSortInput = {
  address?: InputMaybe<SortEnumType>;
  age?: InputMaybe<AgeModelSortInput>;
  bcNo?: InputMaybe<SortEnumType>;
  createdTime?: InputMaybe<SortEnumType>;
  createdUserId?: InputMaybe<SortEnumType>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  guid?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  image?: InputMaybe<SortEnumType>;
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
export type TeachersCollectionSegment = {
  __typename?: 'TeachersCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<TeacherModel>>;
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
