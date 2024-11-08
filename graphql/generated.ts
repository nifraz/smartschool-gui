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
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  grade?: Maybe<Grade>;
  id?: Maybe<Scalars['Long']['output']>;
  languageCode?: Maybe<Scalars['String']['output']>;
  languageName?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  school?: Maybe<SchoolModel>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  section?: Maybe<Scalars['String']['output']>;
};

export type ClassModelFilterInput = {
  and?: InputMaybe<Array<ClassModelFilterInput>>;
  classStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentModelFilterInput>;
  classTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentModelFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  grade?: InputMaybe<NullableOfGradeOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  languageCode?: InputMaybe<StringOperationFilterInput>;
  languageName?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  location?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClassModelFilterInput>>;
  school?: InputMaybe<SchoolModelFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  section?: InputMaybe<StringOperationFilterInput>;
};

export type ClassModelSortInput = {
  createdTime?: InputMaybe<SortEnumType>;
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  grade?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  languageCode?: InputMaybe<SortEnumType>;
  languageName?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  location?: InputMaybe<SortEnumType>;
  school?: InputMaybe<SchoolModelSortInput>;
  schoolId?: InputMaybe<SortEnumType>;
  section?: InputMaybe<SortEnumType>;
};

export type ClassStudentEnrollmentModel = {
  __typename?: 'ClassStudentEnrollmentModel';
  academicYear?: Maybe<Scalars['Int']['output']>;
  classId?: Maybe<Scalars['Long']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  removeReason?: Maybe<Scalars['String']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  rollNo?: Maybe<Scalars['Int']['output']>;
  schoolStudentEnrollmentId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<EnrollmentStatus>;
  studentFullName?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['Long']['output']>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type ClassStudentEnrollmentModelFilterInput = {
  academicYear?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<ClassStudentEnrollmentModelFilterInput>>;
  classId?: InputMaybe<LongOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  or?: InputMaybe<Array<ClassStudentEnrollmentModelFilterInput>>;
  removeReason?: InputMaybe<StringOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  rollNo?: InputMaybe<IntOperationFilterInput>;
  schoolStudentEnrollmentId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  studentFullName?: InputMaybe<StringOperationFilterInput>;
  studentId?: InputMaybe<LongOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ClassTeacherEnrollmentModel = {
  __typename?: 'ClassTeacherEnrollmentModel';
  academicYear?: Maybe<Scalars['Int']['output']>;
  classId?: Maybe<Scalars['Long']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
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
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  or?: InputMaybe<Array<ClassTeacherEnrollmentModelFilterInput>>;
  removedReason?: InputMaybe<StringOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  schoolTeacherEnrollmentId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

/** A segment of a collection. */
export type ClassesCollectionSegment = {
  __typename?: 'ClassesCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<ClassModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
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

export type PersonModel = {
  __typename?: 'PersonModel';
  address?: Maybe<Scalars['String']['output']>;
  age?: Maybe<AgeModel>;
  bcNo?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Sex>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export type PersonModelFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  age?: InputMaybe<AgeModelFilterInput>;
  and?: InputMaybe<Array<PersonModelFilterInput>>;
  bcNo?: InputMaybe<StringOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  dateOfBirth?: InputMaybe<DateOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PersonModelFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  sex?: InputMaybe<NullableOfSexOperationFilterInput>;
  shortName?: InputMaybe<StringOperationFilterInput>;
};

export type PersonModelSortInput = {
  address?: InputMaybe<SortEnumType>;
  age?: InputMaybe<AgeModelSortInput>;
  bcNo?: InputMaybe<SortEnumType>;
  createdTime?: InputMaybe<SortEnumType>;
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  image?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  mobileNo?: InputMaybe<SortEnumType>;
  nicNo?: InputMaybe<SortEnumType>;
  nickname?: InputMaybe<SortEnumType>;
  passportNo?: InputMaybe<SortEnumType>;
  sex?: InputMaybe<SortEnumType>;
  shortName?: InputMaybe<SortEnumType>;
};

export type Query = {
  __typename?: 'Query';
  class?: Maybe<ClassModel>;
  classes?: Maybe<ClassesCollectionSegment>;
  school?: Maybe<SchoolModel>;
  schoolStudentEnrollment?: Maybe<SchoolStudentEnrollmentModel>;
  schoolStudentEnrollmentRequest?: Maybe<SchoolStudentEnrollmentRequestModel>;
  schoolStudentEnrollmentRequests?: Maybe<SchoolStudentEnrollmentRequestsCollectionSegment>;
  schoolStudentEnrollments?: Maybe<SchoolStudentEnrollmentsCollectionSegment>;
  schools?: Maybe<SchoolsCollectionSegment>;
  student?: Maybe<StudentModel>;
  students?: Maybe<StudentsCollectionSegment>;
  teacher?: Maybe<TeacherModel>;
  teachers?: Maybe<TeachersCollectionSegment>;
  user?: Maybe<UserModel>;
  users?: Maybe<UsersCollectionSegment>;
};


export type QueryClassArgs = {
  grade: Grade;
  schoolId: Scalars['Long']['input'];
  section: Scalars['String']['input'];
};


export type QueryClassesArgs = {
  order?: InputMaybe<Array<ClassModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClassModelFilterInput>;
};


export type QuerySchoolArgs = {
  id: Scalars['Long']['input'];
};


export type QuerySchoolStudentEnrollmentArgs = {
  id: Scalars['Long']['input'];
};


export type QuerySchoolStudentEnrollmentRequestArgs = {
  id: Scalars['Long']['input'];
};


export type QuerySchoolStudentEnrollmentRequestsArgs = {
  order?: InputMaybe<Array<SchoolStudentEnrollmentRequestModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchoolStudentEnrollmentRequestModelFilterInput>;
};


export type QuerySchoolStudentEnrollmentsArgs = {
  order?: InputMaybe<Array<SchoolStudentEnrollmentModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchoolStudentEnrollmentModelFilterInput>;
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


export type QueryUserArgs = {
  id: Scalars['Long']['input'];
};


export type QueryUsersArgs = {
  order?: InputMaybe<Array<UserModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserModelFilterInput>;
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
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  division?: Maybe<Scalars['String']['output']>;
  divisionId?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
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
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  division?: InputMaybe<StringOperationFilterInput>;
  divisionId?: InputMaybe<IntOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
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
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  division?: InputMaybe<SortEnumType>;
  divisionId?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  phoneNo?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
};

export type SchoolPrincipalEnrollmentModel = {
  __typename?: 'SchoolPrincipalEnrollmentModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
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
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
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
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no?: Maybe<Scalars['Int']['output']>;
  school?: Maybe<SchoolModel>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  schoolName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<EnrollmentStatus>;
  student?: Maybe<StudentModel>;
  studentFullName?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['Long']['output']>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type SchoolStudentEnrollmentModelFilterInput = {
  and?: InputMaybe<Array<SchoolStudentEnrollmentModelFilterInput>>;
  classStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentModelFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<SchoolStudentEnrollmentModelFilterInput>>;
  school?: InputMaybe<SchoolModelFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  schoolName?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  student?: InputMaybe<StudentModelFilterInput>;
  studentFullName?: InputMaybe<StringOperationFilterInput>;
  studentId?: InputMaybe<LongOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type SchoolStudentEnrollmentModelSortInput = {
  createdTime?: InputMaybe<SortEnumType>;
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  no?: InputMaybe<SortEnumType>;
  school?: InputMaybe<SchoolModelSortInput>;
  schoolId?: InputMaybe<SortEnumType>;
  schoolName?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  student?: InputMaybe<StudentModelSortInput>;
  studentFullName?: InputMaybe<SortEnumType>;
  studentId?: InputMaybe<SortEnumType>;
  time?: InputMaybe<SortEnumType>;
};

export type SchoolStudentEnrollmentRequestModel = {
  __typename?: 'SchoolStudentEnrollmentRequestModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  grade?: Maybe<Grade>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  person?: Maybe<PersonModel>;
  personFullName?: Maybe<Scalars['String']['output']>;
  personId?: Maybe<Scalars['Long']['output']>;
  school?: Maybe<SchoolModel>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  schoolName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<RequestStatus>;
};

export type SchoolStudentEnrollmentRequestModelFilterInput = {
  and?: InputMaybe<Array<SchoolStudentEnrollmentRequestModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  grade?: InputMaybe<NullableOfGradeOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  or?: InputMaybe<Array<SchoolStudentEnrollmentRequestModelFilterInput>>;
  person?: InputMaybe<PersonModelFilterInput>;
  personFullName?: InputMaybe<StringOperationFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  school?: InputMaybe<SchoolModelFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  schoolName?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<NullableOfRequestStatusOperationFilterInput>;
};

export type SchoolStudentEnrollmentRequestModelSortInput = {
  createdTime?: InputMaybe<SortEnumType>;
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  grade?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  person?: InputMaybe<PersonModelSortInput>;
  personFullName?: InputMaybe<SortEnumType>;
  personId?: InputMaybe<SortEnumType>;
  school?: InputMaybe<SchoolModelSortInput>;
  schoolId?: InputMaybe<SortEnumType>;
  schoolName?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
};

/** A segment of a collection. */
export type SchoolStudentEnrollmentRequestsCollectionSegment = {
  __typename?: 'SchoolStudentEnrollmentRequestsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<SchoolStudentEnrollmentRequestModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

/** A segment of a collection. */
export type SchoolStudentEnrollmentsCollectionSegment = {
  __typename?: 'SchoolStudentEnrollmentsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<SchoolStudentEnrollmentModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type SchoolTeacherEnrollmentModel = {
  __typename?: 'SchoolTeacherEnrollmentModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
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
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
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
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  grade: Grade;
  id?: Maybe<Scalars['Long']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  personId?: Maybe<Scalars['Long']['output']>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<RequestStatus>;
};

export type SchoolTeacherEnrollmentRequestModelFilterInput = {
  and?: InputMaybe<Array<SchoolTeacherEnrollmentRequestModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  grade?: InputMaybe<GradeOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
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
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
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
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  dateOfBirth?: InputMaybe<DateOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
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
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  image?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
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
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
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
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  dateOfBirth?: InputMaybe<DateOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
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
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  image?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
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

export type UserModel = {
  __typename?: 'UserModel';
  address?: Maybe<Scalars['String']['output']>;
  age?: Maybe<AgeModel>;
  bcNo?: Maybe<Scalars['String']['output']>;
  createdSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  currentSchoolId?: Maybe<Scalars['Long']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  deletedSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  guardianId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastModifiedSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  principalId?: Maybe<Scalars['Long']['output']>;
  sex?: Maybe<Sex>;
  shortName?: Maybe<Scalars['String']['output']>;
  staffId?: Maybe<Scalars['Long']['output']>;
  studentId?: Maybe<Scalars['Long']['output']>;
  teacherId?: Maybe<Scalars['Long']['output']>;
};

export type UserModelFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  age?: InputMaybe<AgeModelFilterInput>;
  and?: InputMaybe<Array<UserModelFilterInput>>;
  bcNo?: InputMaybe<StringOperationFilterInput>;
  createdSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  currentSchoolId?: InputMaybe<LongOperationFilterInput>;
  dateOfBirth?: InputMaybe<DateOperationFilterInput>;
  deletedSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  guardianId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  lastModifiedSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserModelFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  principalId?: InputMaybe<LongOperationFilterInput>;
  sex?: InputMaybe<NullableOfSexOperationFilterInput>;
  shortName?: InputMaybe<StringOperationFilterInput>;
  staffId?: InputMaybe<LongOperationFilterInput>;
  studentId?: InputMaybe<LongOperationFilterInput>;
  teacherId?: InputMaybe<LongOperationFilterInput>;
};

export type UserModelSortInput = {
  address?: InputMaybe<SortEnumType>;
  age?: InputMaybe<AgeModelSortInput>;
  bcNo?: InputMaybe<SortEnumType>;
  createdTime?: InputMaybe<SortEnumType>;
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  currentSchoolId?: InputMaybe<SortEnumType>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  guardianId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  image?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  mobileNo?: InputMaybe<SortEnumType>;
  nicNo?: InputMaybe<SortEnumType>;
  nickname?: InputMaybe<SortEnumType>;
  passportNo?: InputMaybe<SortEnumType>;
  principalId?: InputMaybe<SortEnumType>;
  sex?: InputMaybe<SortEnumType>;
  shortName?: InputMaybe<SortEnumType>;
  staffId?: InputMaybe<SortEnumType>;
  studentId?: InputMaybe<SortEnumType>;
  teacherId?: InputMaybe<SortEnumType>;
};

/** A segment of a collection. */
export type UsersCollectionSegment = {
  __typename?: 'UsersCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<UserModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};
