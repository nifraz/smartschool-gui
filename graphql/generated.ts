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
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: { input: any; output: any; }
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: { input: any; output: any; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
};

export type AcademicYear = {
  __typename?: 'AcademicYear';
  classStudentEnrollments: Array<ClassStudentEnrollment>;
  classTeacherEnrollments: Array<ClassTeacherEnrollment>;
  endDate: Scalars['Date']['output'];
  startDate: Scalars['Date']['output'];
  year: Scalars['Int']['output'];
};

export type AcademicYearFilterInput = {
  and?: InputMaybe<Array<AcademicYearFilterInput>>;
  classStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentFilterInput>;
  classTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentFilterInput>;
  endDate?: InputMaybe<DateOperationFilterInput>;
  or?: InputMaybe<Array<AcademicYearFilterInput>>;
  startDate?: InputMaybe<DateOperationFilterInput>;
  year?: InputMaybe<IntOperationFilterInput>;
};

export type AcademicYearModel = {
  __typename?: 'AcademicYearModel';
  endDate?: Maybe<Scalars['Date']['output']>;
  recentClassStudentEnrollments: Array<ClassStudentEnrollmentModel>;
  recentClassTeacherEnrollments: Array<ClassTeacherEnrollmentModel>;
  startDate?: Maybe<Scalars['Date']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type AcademicYearModelFilterInput = {
  and?: InputMaybe<Array<AcademicYearModelFilterInput>>;
  endDate?: InputMaybe<DateOperationFilterInput>;
  or?: InputMaybe<Array<AcademicYearModelFilterInput>>;
  recentClassStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentModelFilterInput>;
  recentClassTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentModelFilterInput>;
  startDate?: InputMaybe<DateOperationFilterInput>;
  year?: InputMaybe<IntOperationFilterInput>;
};

export type AcademicYearModelSortInput = {
  endDate?: InputMaybe<SortEnumType>;
  startDate?: InputMaybe<SortEnumType>;
  year?: InputMaybe<SortEnumType>;
};

/** A segment of a collection. */
export type AcademicYearsCollectionSegment = {
  __typename?: 'AcademicYearsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<AcademicYearModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type Age = {
  __typename?: 'Age';
  days: Scalars['Int']['output'];
  longString: Scalars['String']['output'];
  months: Scalars['Int']['output'];
  shortString: Scalars['String']['output'];
  years: Scalars['Int']['output'];
};

export type AgeFilterInput = {
  and?: InputMaybe<Array<AgeFilterInput>>;
  days?: InputMaybe<IntOperationFilterInput>;
  longString?: InputMaybe<StringOperationFilterInput>;
  months?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<AgeFilterInput>>;
  shortString?: InputMaybe<StringOperationFilterInput>;
  years?: InputMaybe<IntOperationFilterInput>;
};

export type AgeModel = {
  __typename?: 'AgeModel';
  days?: Maybe<Scalars['Int']['output']>;
  longString?: Maybe<Scalars['String']['output']>;
  months?: Maybe<Scalars['Int']['output']>;
  shortString?: Maybe<Scalars['String']['output']>;
  years?: Maybe<Scalars['Int']['output']>;
};

export type AgeModelFilterInput = {
  and?: InputMaybe<Array<AgeModelFilterInput>>;
  days?: InputMaybe<IntOperationFilterInput>;
  longString?: InputMaybe<StringOperationFilterInput>;
  months?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<AgeModelFilterInput>>;
  shortString?: InputMaybe<StringOperationFilterInput>;
  years?: InputMaybe<IntOperationFilterInput>;
};

export type AgeModelSortInput = {
  days?: InputMaybe<SortEnumType>;
  longString?: InputMaybe<SortEnumType>;
  months?: InputMaybe<SortEnumType>;
  shortString?: InputMaybe<SortEnumType>;
  years?: InputMaybe<SortEnumType>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ByteOperationFilterInput = {
  eq?: InputMaybe<Scalars['Byte']['input']>;
  gt?: InputMaybe<Scalars['Byte']['input']>;
  gte?: InputMaybe<Scalars['Byte']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  lt?: InputMaybe<Scalars['Byte']['input']>;
  lte?: InputMaybe<Scalars['Byte']['input']>;
  neq?: InputMaybe<Scalars['Byte']['input']>;
  ngt?: InputMaybe<Scalars['Byte']['input']>;
  ngte?: InputMaybe<Scalars['Byte']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  nlt?: InputMaybe<Scalars['Byte']['input']>;
  nlte?: InputMaybe<Scalars['Byte']['input']>;
};

export type Class = {
  __typename?: 'Class';
  classStudentEnrollments: Array<ClassStudentEnrollment>;
  classTeacherEnrollments: Array<ClassTeacherEnrollment>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  grade: Grade;
  id: Scalars['Long']['output'];
  language: Language;
  languageCode: Scalars['String']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  school: School;
  schoolId: Scalars['Long']['output'];
  section: Scalars['String']['output'];
};

export type ClassFilterInput = {
  and?: InputMaybe<Array<ClassFilterInput>>;
  classStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentFilterInput>;
  classTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  grade?: InputMaybe<GradeOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  language?: InputMaybe<LanguageFilterInput>;
  languageCode?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  location?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClassFilterInput>>;
  school?: InputMaybe<SchoolFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  section?: InputMaybe<StringOperationFilterInput>;
};

export type ClassModel = {
  __typename?: 'ClassModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  grade?: Maybe<Grade>;
  id?: Maybe<Scalars['Long']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageModel>;
  languageCode?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  recentClassStudentEnrollments: Array<ClassStudentEnrollmentModel>;
  recentClassTeacherEnrollments: Array<ClassTeacherEnrollmentModel>;
  school?: Maybe<SchoolModel>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  section?: Maybe<Scalars['String']['output']>;
};

export type ClassModelFilterInput = {
  and?: InputMaybe<Array<ClassModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  grade?: InputMaybe<NullableOfGradeOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  language?: InputMaybe<LanguageModelFilterInput>;
  languageCode?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  location?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClassModelFilterInput>>;
  recentClassStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentModelFilterInput>;
  recentClassTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentModelFilterInput>;
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
  label?: InputMaybe<SortEnumType>;
  language?: InputMaybe<LanguageModelSortInput>;
  languageCode?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  location?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
  school?: InputMaybe<SchoolModelSortInput>;
  schoolId?: InputMaybe<SortEnumType>;
  section?: InputMaybe<SortEnumType>;
};

export type ClassStudentEnrollment = {
  __typename?: 'ClassStudentEnrollment';
  academicYear: AcademicYear;
  academicYearYear: Scalars['Int']['output'];
  class: Class;
  classId: Scalars['Long']['output'];
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  removeReason?: Maybe<Scalars['String']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  rollNo?: Maybe<Scalars['Int']['output']>;
  schoolStudentEnrollment: SchoolStudentEnrollment;
  schoolStudentEnrollmentId: Scalars['Long']['output'];
  status: EnrollmentStatus;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type ClassStudentEnrollmentFilterInput = {
  academicYear?: InputMaybe<AcademicYearFilterInput>;
  academicYearYear?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<ClassStudentEnrollmentFilterInput>>;
  class?: InputMaybe<ClassFilterInput>;
  classId?: InputMaybe<LongOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClassStudentEnrollmentFilterInput>>;
  removeReason?: InputMaybe<StringOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  rollNo?: InputMaybe<IntOperationFilterInput>;
  schoolStudentEnrollment?: InputMaybe<SchoolStudentEnrollmentFilterInput>;
  schoolStudentEnrollmentId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<EnrollmentStatusOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ClassStudentEnrollmentModel = {
  __typename?: 'ClassStudentEnrollmentModel';
  academicYear?: Maybe<AcademicYear>;
  academicYearYear?: Maybe<Scalars['Int']['output']>;
  class?: Maybe<ClassModel>;
  classId?: Maybe<Scalars['Long']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  removeReason?: Maybe<Scalars['String']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  rollNo?: Maybe<Scalars['Int']['output']>;
  schoolStudentEnrollment?: Maybe<SchoolStudentEnrollmentModel>;
  schoolStudentEnrollmentId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<EnrollmentStatus>;
  student?: Maybe<StudentModel>;
  studentId?: Maybe<Scalars['Long']['output']>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type ClassStudentEnrollmentModelFilterInput = {
  academicYear?: InputMaybe<AcademicYearFilterInput>;
  academicYearYear?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<ClassStudentEnrollmentModelFilterInput>>;
  class?: InputMaybe<ClassModelFilterInput>;
  classId?: InputMaybe<LongOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClassStudentEnrollmentModelFilterInput>>;
  removeReason?: InputMaybe<StringOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  rollNo?: InputMaybe<IntOperationFilterInput>;
  schoolStudentEnrollment?: InputMaybe<SchoolStudentEnrollmentModelFilterInput>;
  schoolStudentEnrollmentId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  student?: InputMaybe<StudentModelFilterInput>;
  studentId?: InputMaybe<LongOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ClassTeacherEnrollment = {
  __typename?: 'ClassTeacherEnrollment';
  academicYear: AcademicYear;
  academicYearYear: Scalars['Int']['output'];
  class: Class;
  classId: Scalars['Long']['output'];
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  removedReason?: Maybe<Scalars['String']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  schoolTeacherEnrollment: SchoolTeacherEnrollment;
  schoolTeacherEnrollmentId: Scalars['Long']['output'];
  status: EnrollmentStatus;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type ClassTeacherEnrollmentFilterInput = {
  academicYear?: InputMaybe<AcademicYearFilterInput>;
  academicYearYear?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<ClassTeacherEnrollmentFilterInput>>;
  class?: InputMaybe<ClassFilterInput>;
  classId?: InputMaybe<LongOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClassTeacherEnrollmentFilterInput>>;
  removedReason?: InputMaybe<StringOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  schoolTeacherEnrollment?: InputMaybe<SchoolTeacherEnrollmentFilterInput>;
  schoolTeacherEnrollmentId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<EnrollmentStatusOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ClassTeacherEnrollmentModel = {
  __typename?: 'ClassTeacherEnrollmentModel';
  academicYear?: Maybe<AcademicYearModel>;
  academicYearYear?: Maybe<Scalars['Int']['output']>;
  class?: Maybe<ClassModel>;
  classId?: Maybe<Scalars['Long']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  removedReason?: Maybe<Scalars['String']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  schoolTeacherEnrollment?: Maybe<SchoolTeacherEnrollmentModel>;
  schoolTeacherEnrollmentId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<EnrollmentStatus>;
  teacher?: Maybe<TeacherModel>;
  teacherId?: Maybe<Scalars['Long']['output']>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type ClassTeacherEnrollmentModelFilterInput = {
  academicYear?: InputMaybe<AcademicYearModelFilterInput>;
  academicYearYear?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<ClassTeacherEnrollmentModelFilterInput>>;
  class?: InputMaybe<ClassModelFilterInput>;
  classId?: InputMaybe<LongOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClassTeacherEnrollmentModelFilterInput>>;
  removedReason?: InputMaybe<StringOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  schoolTeacherEnrollment?: InputMaybe<SchoolTeacherEnrollmentModelFilterInput>;
  schoolTeacherEnrollmentId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  teacher?: InputMaybe<TeacherModelFilterInput>;
  teacherId?: InputMaybe<LongOperationFilterInput>;
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

export type District = {
  __typename?: 'District';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  province: Province;
  provinceId: Scalars['Int']['output'];
  sinhalaName: Scalars['String']['output'];
  tamilName: Scalars['String']['output'];
  zones: Array<Zone>;
};

export type DistrictFilterInput = {
  and?: InputMaybe<Array<DistrictFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DistrictFilterInput>>;
  province?: InputMaybe<ProvinceFilterInput>;
  provinceId?: InputMaybe<IntOperationFilterInput>;
  sinhalaName?: InputMaybe<StringOperationFilterInput>;
  tamilName?: InputMaybe<StringOperationFilterInput>;
  zones?: InputMaybe<ListFilterInputTypeOfZoneFilterInput>;
};

export type DistrictSortInput = {
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  province?: InputMaybe<ProvinceSortInput>;
  provinceId?: InputMaybe<SortEnumType>;
  sinhalaName?: InputMaybe<SortEnumType>;
  tamilName?: InputMaybe<SortEnumType>;
};

export type Division = {
  __typename?: 'Division';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  schools: Array<School>;
  sinhalaName: Scalars['String']['output'];
  tamilName: Scalars['String']['output'];
  zone: Zone;
  zoneId: Scalars['Int']['output'];
};

export type DivisionFilterInput = {
  and?: InputMaybe<Array<DivisionFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DivisionFilterInput>>;
  schools?: InputMaybe<ListFilterInputTypeOfSchoolFilterInput>;
  sinhalaName?: InputMaybe<StringOperationFilterInput>;
  tamilName?: InputMaybe<StringOperationFilterInput>;
  zone?: InputMaybe<ZoneFilterInput>;
  zoneId?: InputMaybe<IntOperationFilterInput>;
};

export type DivisionModel = {
  __typename?: 'DivisionModel';
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sinhalaName?: Maybe<Scalars['String']['output']>;
  tamilName?: Maybe<Scalars['String']['output']>;
};

export type DivisionModelFilterInput = {
  and?: InputMaybe<Array<DivisionModelFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DivisionModelFilterInput>>;
  sinhalaName?: InputMaybe<StringOperationFilterInput>;
  tamilName?: InputMaybe<StringOperationFilterInput>;
};

export type DivisionModelSortInput = {
  id?: InputMaybe<SortEnumType>;
  label?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  sinhalaName?: InputMaybe<SortEnumType>;
  tamilName?: InputMaybe<SortEnumType>;
};

export type DivisionSortInput = {
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  sinhalaName?: InputMaybe<SortEnumType>;
  tamilName?: InputMaybe<SortEnumType>;
  zone?: InputMaybe<ZoneSortInput>;
  zoneId?: InputMaybe<SortEnumType>;
};

/** A segment of a collection. */
export type DivisionsCollectionSegment = {
  __typename?: 'DivisionsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<DivisionModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export enum EnrollmentStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Left = 'LEFT',
  Rejoined = 'REJOINED',
  Resigned = 'RESIGNED',
  Retired = 'RETIRED'
}

export type EnrollmentStatusOperationFilterInput = {
  eq?: InputMaybe<EnrollmentStatus>;
  in?: InputMaybe<Array<EnrollmentStatus>>;
  neq?: InputMaybe<EnrollmentStatus>;
  nin?: InputMaybe<Array<EnrollmentStatus>>;
};

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
  Grade13 = 'GRADE13'
}

export type GradeOperationFilterInput = {
  eq?: InputMaybe<Grade>;
  in?: InputMaybe<Array<Grade>>;
  neq?: InputMaybe<Grade>;
  nin?: InputMaybe<Array<Grade>>;
};

export enum HumanRelationship {
  Aunt = 'AUNT',
  Brother = 'BROTHER',
  BrotherInLaw = 'BROTHER_IN_LAW',
  Cousin = 'COUSIN',
  Daughter = 'DAUGHTER',
  DaughterInLaw = 'DAUGHTER_IN_LAW',
  Father = 'FATHER',
  FatherInLaw = 'FATHER_IN_LAW',
  Granddaughter = 'GRANDDAUGHTER',
  Grandfather = 'GRANDFATHER',
  Grandmother = 'GRANDMOTHER',
  Grandson = 'GRANDSON',
  Husband = 'HUSBAND',
  Mother = 'MOTHER',
  MotherInLaw = 'MOTHER_IN_LAW',
  Nephew = 'NEPHEW',
  Niece = 'NIECE',
  Sister = 'SISTER',
  SisterInLaw = 'SISTER_IN_LAW',
  Son = 'SON',
  SonInLaw = 'SON_IN_LAW',
  Stepdaughter = 'STEPDAUGHTER',
  Stepfather = 'STEPFATHER',
  Stepmother = 'STEPMOTHER',
  Stepson = 'STEPSON',
  Uncle = 'UNCLE',
  Wife = 'WIFE'
}

export type HumanRelationshipOperationFilterInput = {
  eq?: InputMaybe<HumanRelationship>;
  in?: InputMaybe<Array<HumanRelationship>>;
  neq?: InputMaybe<HumanRelationship>;
  nin?: InputMaybe<Array<HumanRelationship>>;
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

export type Language = {
  __typename?: 'Language';
  classes: Array<Class>;
  code: Scalars['String']['output'];
  ietfTag?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type LanguageFilterInput = {
  and?: InputMaybe<Array<LanguageFilterInput>>;
  classes?: InputMaybe<ListFilterInputTypeOfClassFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  ietfTag?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<LanguageFilterInput>>;
};

export type LanguageModel = {
  __typename?: 'LanguageModel';
  code?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  ietfTag?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  recentClasses: Array<ClassModel>;
};

export type LanguageModelFilterInput = {
  and?: InputMaybe<Array<LanguageModelFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  ietfTag?: InputMaybe<StringOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<LanguageModelFilterInput>>;
  recentClasses?: InputMaybe<ListFilterInputTypeOfClassModelFilterInput>;
};

export type LanguageModelSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdTime?: InputMaybe<SortEnumType>;
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  ietfTag?: InputMaybe<SortEnumType>;
  label?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
};

export type ListFilterInputTypeOfClassFilterInput = {
  all?: InputMaybe<ClassFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassFilterInput>;
  some?: InputMaybe<ClassFilterInput>;
};

export type ListFilterInputTypeOfClassModelFilterInput = {
  all?: InputMaybe<ClassModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassModelFilterInput>;
  some?: InputMaybe<ClassModelFilterInput>;
};

export type ListFilterInputTypeOfClassStudentEnrollmentFilterInput = {
  all?: InputMaybe<ClassStudentEnrollmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassStudentEnrollmentFilterInput>;
  some?: InputMaybe<ClassStudentEnrollmentFilterInput>;
};

export type ListFilterInputTypeOfClassStudentEnrollmentModelFilterInput = {
  all?: InputMaybe<ClassStudentEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassStudentEnrollmentModelFilterInput>;
  some?: InputMaybe<ClassStudentEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfClassTeacherEnrollmentFilterInput = {
  all?: InputMaybe<ClassTeacherEnrollmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassTeacherEnrollmentFilterInput>;
  some?: InputMaybe<ClassTeacherEnrollmentFilterInput>;
};

export type ListFilterInputTypeOfClassTeacherEnrollmentModelFilterInput = {
  all?: InputMaybe<ClassTeacherEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ClassTeacherEnrollmentModelFilterInput>;
  some?: InputMaybe<ClassTeacherEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfDistrictFilterInput = {
  all?: InputMaybe<DistrictFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<DistrictFilterInput>;
  some?: InputMaybe<DistrictFilterInput>;
};

export type ListFilterInputTypeOfDivisionFilterInput = {
  all?: InputMaybe<DivisionFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<DivisionFilterInput>;
  some?: InputMaybe<DivisionFilterInput>;
};

export type ListFilterInputTypeOfPersonFilterInput = {
  all?: InputMaybe<PersonFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PersonFilterInput>;
  some?: InputMaybe<PersonFilterInput>;
};

export type ListFilterInputTypeOfPersonModelFilterInput = {
  all?: InputMaybe<PersonModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PersonModelFilterInput>;
  some?: InputMaybe<PersonModelFilterInput>;
};

export type ListFilterInputTypeOfPersonQualificationFilterInput = {
  all?: InputMaybe<PersonQualificationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PersonQualificationFilterInput>;
  some?: InputMaybe<PersonQualificationFilterInput>;
};

export type ListFilterInputTypeOfPersonRelationshipFilterInput = {
  all?: InputMaybe<PersonRelationshipFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PersonRelationshipFilterInput>;
  some?: InputMaybe<PersonRelationshipFilterInput>;
};

export type ListFilterInputTypeOfPersonRelationshipModelFilterInput = {
  all?: InputMaybe<PersonRelationshipModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PersonRelationshipModelFilterInput>;
  some?: InputMaybe<PersonRelationshipModelFilterInput>;
};

export type ListFilterInputTypeOfPrincipalFilterInput = {
  all?: InputMaybe<PrincipalFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PrincipalFilterInput>;
  some?: InputMaybe<PrincipalFilterInput>;
};

export type ListFilterInputTypeOfSchoolFilterInput = {
  all?: InputMaybe<SchoolFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolFilterInput>;
  some?: InputMaybe<SchoolFilterInput>;
};

export type ListFilterInputTypeOfSchoolPrincipalEnrollmentFilterInput = {
  all?: InputMaybe<SchoolPrincipalEnrollmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolPrincipalEnrollmentFilterInput>;
  some?: InputMaybe<SchoolPrincipalEnrollmentFilterInput>;
};

export type ListFilterInputTypeOfSchoolPrincipalEnrollmentModelFilterInput = {
  all?: InputMaybe<SchoolPrincipalEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolPrincipalEnrollmentModelFilterInput>;
  some?: InputMaybe<SchoolPrincipalEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfSchoolStudentEnrollmentFilterInput = {
  all?: InputMaybe<SchoolStudentEnrollmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolStudentEnrollmentFilterInput>;
  some?: InputMaybe<SchoolStudentEnrollmentFilterInput>;
};

export type ListFilterInputTypeOfSchoolStudentEnrollmentModelFilterInput = {
  all?: InputMaybe<SchoolStudentEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolStudentEnrollmentModelFilterInput>;
  some?: InputMaybe<SchoolStudentEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfSchoolStudentEnrollmentRequestFilterInput = {
  all?: InputMaybe<SchoolStudentEnrollmentRequestFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolStudentEnrollmentRequestFilterInput>;
  some?: InputMaybe<SchoolStudentEnrollmentRequestFilterInput>;
};

export type ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput = {
  all?: InputMaybe<SchoolStudentEnrollmentRequestModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolStudentEnrollmentRequestModelFilterInput>;
  some?: InputMaybe<SchoolStudentEnrollmentRequestModelFilterInput>;
};

export type ListFilterInputTypeOfSchoolTeacherEnrollmentFilterInput = {
  all?: InputMaybe<SchoolTeacherEnrollmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolTeacherEnrollmentFilterInput>;
  some?: InputMaybe<SchoolTeacherEnrollmentFilterInput>;
};

export type ListFilterInputTypeOfSchoolTeacherEnrollmentModelFilterInput = {
  all?: InputMaybe<SchoolTeacherEnrollmentModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolTeacherEnrollmentModelFilterInput>;
  some?: InputMaybe<SchoolTeacherEnrollmentModelFilterInput>;
};

export type ListFilterInputTypeOfSchoolTeacherEnrollmentRequestFilterInput = {
  all?: InputMaybe<SchoolTeacherEnrollmentRequestFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolTeacherEnrollmentRequestFilterInput>;
  some?: InputMaybe<SchoolTeacherEnrollmentRequestFilterInput>;
};

export type ListFilterInputTypeOfSchoolTeacherEnrollmentRequestModelFilterInput = {
  all?: InputMaybe<SchoolTeacherEnrollmentRequestModelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SchoolTeacherEnrollmentRequestModelFilterInput>;
  some?: InputMaybe<SchoolTeacherEnrollmentRequestModelFilterInput>;
};

export type ListFilterInputTypeOfStudentFilterInput = {
  all?: InputMaybe<StudentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<StudentFilterInput>;
  some?: InputMaybe<StudentFilterInput>;
};

export type ListFilterInputTypeOfTeacherFilterInput = {
  all?: InputMaybe<TeacherFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<TeacherFilterInput>;
  some?: InputMaybe<TeacherFilterInput>;
};

export type ListFilterInputTypeOfUserFilterInput = {
  all?: InputMaybe<UserFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserFilterInput>;
  some?: InputMaybe<UserFilterInput>;
};

export type ListFilterInputTypeOfZoneFilterInput = {
  all?: InputMaybe<ZoneFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ZoneFilterInput>;
  some?: InputMaybe<ZoneFilterInput>;
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
  createPerson: PersonModel;
  createPersonRelationship: PersonRelationshipModel;
  createPrincipal: PrincipalModel;
  createSchool: SchoolModel;
  createSchoolStudentEnrollment: SchoolStudentEnrollmentModel;
  createSchoolStudentEnrollmentRequest: SchoolStudentEnrollmentRequestModel;
  createStudent: StudentModel;
  createTeacher: TeacherModel;
  updatePerson: PersonModel;
  updatePrincipal: PersonModel;
  updateSchool: SchoolModel;
  updateSchoolStudentEnrollmentRequest: SchoolStudentEnrollmentRequestModel;
  updateSchoolStudentEnrollmentRequestStatus: SchoolStudentEnrollmentRequestModel;
  updateStudent: StudentModel;
  updateTeacher: TeacherModel;
};


export type MutationCreatePersonArgs = {
  input: PersonInput;
};


export type MutationCreatePersonRelationshipArgs = {
  input: PersonRelationshipInput;
};


export type MutationCreatePrincipalArgs = {
  input: PrincipalInput;
};


export type MutationCreateSchoolArgs = {
  input: SchoolInput;
};


export type MutationCreateSchoolStudentEnrollmentArgs = {
  input: SchoolStudentEnrollmentInput;
};


export type MutationCreateSchoolStudentEnrollmentRequestArgs = {
  input: SchoolStudentEnrollmentRequestInput;
};


export type MutationCreateStudentArgs = {
  input: StudentInput;
};


export type MutationCreateTeacherArgs = {
  input: TeacherInput;
};


export type MutationUpdatePersonArgs = {
  input: PersonInput;
};


export type MutationUpdatePrincipalArgs = {
  input: PrincipalInput;
};


export type MutationUpdateSchoolArgs = {
  input: SchoolInput;
};


export type MutationUpdateSchoolStudentEnrollmentRequestArgs = {
  input: SchoolStudentEnrollmentRequestInput;
};


export type MutationUpdateSchoolStudentEnrollmentRequestStatusArgs = {
  input: SchoolStudentEnrollmentRequestStatusUpdateInput;
};


export type MutationUpdateStudentArgs = {
  input: StudentInput;
};


export type MutationUpdateTeacherArgs = {
  input: TeacherInput;
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

export type NullableOfHumanRelationshipOperationFilterInput = {
  eq?: InputMaybe<HumanRelationship>;
  in?: InputMaybe<Array<InputMaybe<HumanRelationship>>>;
  neq?: InputMaybe<HumanRelationship>;
  nin?: InputMaybe<Array<InputMaybe<HumanRelationship>>>;
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

export type Person = {
  __typename?: 'Person';
  address?: Maybe<Scalars['String']['output']>;
  age: Age;
  bcNo?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['Long']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  person1Relationships: Array<PersonRelationship>;
  person2Relationships: Array<PersonRelationship>;
  principal?: Maybe<Principal>;
  schoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequest>;
  schoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequest>;
  sex: Sex;
  shortName: Scalars['String']['output'];
  student?: Maybe<Student>;
  teacher?: Maybe<Teacher>;
  user?: Maybe<User>;
};

export type PersonFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  age?: InputMaybe<AgeFilterInput>;
  and?: InputMaybe<Array<PersonFilterInput>>;
  bcNo?: InputMaybe<StringOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  dateOfBirth?: InputMaybe<DateOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PersonFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  person1Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipFilterInput>;
  person2Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipFilterInput>;
  principal?: InputMaybe<PrincipalFilterInput>;
  schoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestFilterInput>;
  schoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestFilterInput>;
  sex?: InputMaybe<SexOperationFilterInput>;
  shortName?: InputMaybe<StringOperationFilterInput>;
  student?: InputMaybe<StudentFilterInput>;
  teacher?: InputMaybe<TeacherFilterInput>;
  user?: InputMaybe<UserFilterInput>;
};

export type PersonInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bcNo?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Long']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  nicNo?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  passportNo?: InputMaybe<Scalars['String']['input']>;
  sex: Sex;
  shortName: Scalars['String']['input'];
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
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  recentPerson1Relationships: Array<PersonRelationshipModel>;
  recentPerson2Relationships: Array<PersonRelationshipModel>;
  recentSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  recentSchoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequestModel>;
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
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PersonModelFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  recentPerson1Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipModelFilterInput>;
  recentPerson2Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipModelFilterInput>;
  recentSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  recentSchoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestModelFilterInput>;
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
  label?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  mobileNo?: InputMaybe<SortEnumType>;
  nicNo?: InputMaybe<SortEnumType>;
  nickname?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
  passportNo?: InputMaybe<SortEnumType>;
  sex?: InputMaybe<SortEnumType>;
  shortName?: InputMaybe<SortEnumType>;
};

export type PersonQualification = {
  __typename?: 'PersonQualification';
  awardedDate?: Maybe<Scalars['Date']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person: Person;
  personId: Scalars['Long']['output'];
  qualification: Qualification;
  qualificationId: Scalars['Byte']['output'];
};

export type PersonQualificationFilterInput = {
  and?: InputMaybe<Array<PersonQualificationFilterInput>>;
  awardedDate?: InputMaybe<DateOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PersonQualificationFilterInput>>;
  person?: InputMaybe<PersonFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  qualification?: InputMaybe<QualificationFilterInput>;
  qualificationId?: InputMaybe<ByteOperationFilterInput>;
};

export type PersonRelationship = {
  __typename?: 'PersonRelationship';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person1: Person;
  person1Id: Scalars['Long']['output'];
  person1Relationship: HumanRelationship;
  person2: Person;
  person2Id: Scalars['Long']['output'];
  person2Relationship: HumanRelationship;
};

export type PersonRelationshipFilterInput = {
  and?: InputMaybe<Array<PersonRelationshipFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PersonRelationshipFilterInput>>;
  person1?: InputMaybe<PersonFilterInput>;
  person1Id?: InputMaybe<LongOperationFilterInput>;
  person1Relationship?: InputMaybe<HumanRelationshipOperationFilterInput>;
  person2?: InputMaybe<PersonFilterInput>;
  person2Id?: InputMaybe<LongOperationFilterInput>;
  person2Relationship?: InputMaybe<HumanRelationshipOperationFilterInput>;
};

export type PersonRelationshipInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  person1Id: Scalars['Long']['input'];
  person1Relationship: HumanRelationship;
  person2Id: Scalars['Long']['input'];
  person2Relationship: HumanRelationship;
};

export type PersonRelationshipModel = {
  __typename?: 'PersonRelationshipModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person1?: Maybe<PersonModel>;
  person1Id?: Maybe<Scalars['Long']['output']>;
  person1Relationship?: Maybe<HumanRelationship>;
  person2?: Maybe<PersonModel>;
  person2Id?: Maybe<Scalars['Long']['output']>;
  person2Relationship?: Maybe<HumanRelationship>;
};

export type PersonRelationshipModelFilterInput = {
  and?: InputMaybe<Array<PersonRelationshipModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PersonRelationshipModelFilterInput>>;
  person1?: InputMaybe<PersonModelFilterInput>;
  person1Id?: InputMaybe<LongOperationFilterInput>;
  person1Relationship?: InputMaybe<NullableOfHumanRelationshipOperationFilterInput>;
  person2?: InputMaybe<PersonModelFilterInput>;
  person2Id?: InputMaybe<LongOperationFilterInput>;
  person2Relationship?: InputMaybe<NullableOfHumanRelationshipOperationFilterInput>;
};

export type PersonRelationshipModelSortInput = {
  createdTime?: InputMaybe<SortEnumType>;
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  label?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
  person1?: InputMaybe<PersonModelSortInput>;
  person1Id?: InputMaybe<SortEnumType>;
  person1Relationship?: InputMaybe<SortEnumType>;
  person2?: InputMaybe<PersonModelSortInput>;
  person2Id?: InputMaybe<SortEnumType>;
  person2Relationship?: InputMaybe<SortEnumType>;
};

/** A segment of a collection. */
export type PersonRelationshipsCollectionSegment = {
  __typename?: 'PersonRelationshipsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<PersonRelationshipModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

/** A segment of a collection. */
export type PersonsCollectionSegment = {
  __typename?: 'PersonsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<PersonModel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type Principal = {
  __typename?: 'Principal';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person: Person;
  personId: Scalars['Long']['output'];
  schoolPrincipalEnrollments: Array<SchoolPrincipalEnrollment>;
};

export type PrincipalFilterInput = {
  and?: InputMaybe<Array<PrincipalFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PrincipalFilterInput>>;
  person?: InputMaybe<PersonFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  schoolPrincipalEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolPrincipalEnrollmentFilterInput>;
};

export type PrincipalInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bcNo?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Long']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  nicNo?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  passportNo?: InputMaybe<Scalars['String']['input']>;
  sex: Sex;
  shortName: Scalars['String']['input'];
};

export type PrincipalModel = {
  __typename?: 'PrincipalModel';
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
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  recentPerson1Relationships: Array<PersonRelationshipModel>;
  recentPerson2Relationships: Array<PersonRelationshipModel>;
  recentSchoolPrincipalEnrollments: Array<SchoolPrincipalEnrollmentModel>;
  recentSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  recentSchoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequestModel>;
  sex?: Maybe<Sex>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export type PrincipalModelFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  age?: InputMaybe<AgeModelFilterInput>;
  and?: InputMaybe<Array<PrincipalModelFilterInput>>;
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
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PrincipalModelFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  recentPerson1Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipModelFilterInput>;
  recentPerson2Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipModelFilterInput>;
  recentSchoolPrincipalEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolPrincipalEnrollmentModelFilterInput>;
  recentSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  recentSchoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestModelFilterInput>;
  sex?: InputMaybe<NullableOfSexOperationFilterInput>;
  shortName?: InputMaybe<StringOperationFilterInput>;
};

export type Province = {
  __typename?: 'Province';
  districts: Array<District>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  sinhalaName: Scalars['String']['output'];
  tamilName: Scalars['String']['output'];
};

export type ProvinceFilterInput = {
  and?: InputMaybe<Array<ProvinceFilterInput>>;
  districts?: InputMaybe<ListFilterInputTypeOfDistrictFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProvinceFilterInput>>;
  sinhalaName?: InputMaybe<StringOperationFilterInput>;
  tamilName?: InputMaybe<StringOperationFilterInput>;
};

export type ProvinceSortInput = {
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  sinhalaName?: InputMaybe<SortEnumType>;
  tamilName?: InputMaybe<SortEnumType>;
};

export type Qualification = {
  __typename?: 'Qualification';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Byte']['output'];
  personQualifications: Array<PersonQualification>;
  title: Scalars['String']['output'];
};

export type QualificationFilterInput = {
  and?: InputMaybe<Array<QualificationFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ByteOperationFilterInput>;
  or?: InputMaybe<Array<QualificationFilterInput>>;
  personQualifications?: InputMaybe<ListFilterInputTypeOfPersonQualificationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  academicYears?: Maybe<AcademicYearsCollectionSegment>;
  class?: Maybe<ClassModel>;
  classes?: Maybe<ClassesCollectionSegment>;
  divisions?: Maybe<DivisionsCollectionSegment>;
  person?: Maybe<PersonModel>;
  personRelationship?: Maybe<PersonRelationshipModel>;
  personRelationships?: Maybe<PersonRelationshipsCollectionSegment>;
  persons?: Maybe<PersonsCollectionSegment>;
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


export type QueryAcademicYearsArgs = {
  order?: InputMaybe<Array<AcademicYearModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AcademicYearModelFilterInput>;
};


export type QueryClassArgs = {
  id: Scalars['Long']['input'];
};


export type QueryClassesArgs = {
  order?: InputMaybe<Array<ClassModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClassModelFilterInput>;
};


export type QueryDivisionsArgs = {
  order?: InputMaybe<Array<DivisionModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DivisionModelFilterInput>;
};


export type QueryPersonArgs = {
  id: Scalars['Long']['input'];
};


export type QueryPersonRelationshipArgs = {
  id: Scalars['Long']['input'];
};


export type QueryPersonRelationshipsArgs = {
  order?: InputMaybe<Array<PersonRelationshipModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonRelationshipModelFilterInput>;
};


export type QueryPersonsArgs = {
  order?: InputMaybe<Array<PersonModelSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonModelFilterInput>;
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
  Cancelled = 'CANCELLED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Rejected = 'REJECTED'
}

export type RequestStatusOperationFilterInput = {
  eq?: InputMaybe<RequestStatus>;
  in?: InputMaybe<Array<RequestStatus>>;
  neq?: InputMaybe<RequestStatus>;
  nin?: InputMaybe<Array<RequestStatus>>;
};

export type School = {
  __typename?: 'School';
  address?: Maybe<Scalars['String']['output']>;
  censusNo: Scalars['String']['output'];
  classes: Array<Class>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  division: Division;
  divisionId: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  phoneNo?: Maybe<Scalars['String']['output']>;
  schoolPrincipalEnrollments: Array<SchoolPrincipalEnrollment>;
  schoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequest>;
  schoolStudentEnrollments: Array<SchoolStudentEnrollment>;
  schoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequest>;
  schoolTeacherEnrollments: Array<SchoolTeacherEnrollment>;
  type: SchoolType;
};

export type SchoolFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<SchoolFilterInput>>;
  censusNo?: InputMaybe<StringOperationFilterInput>;
  classes?: InputMaybe<ListFilterInputTypeOfClassFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  division?: InputMaybe<DivisionFilterInput>;
  divisionId?: InputMaybe<IntOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  location?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolFilterInput>>;
  phoneNo?: InputMaybe<StringOperationFilterInput>;
  schoolPrincipalEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolPrincipalEnrollmentFilterInput>;
  schoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestFilterInput>;
  schoolStudentEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentFilterInput>;
  schoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestFilterInput>;
  schoolTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentFilterInput>;
  type?: InputMaybe<SchoolTypeOperationFilterInput>;
};

export type SchoolInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  censusNo: Scalars['String']['input'];
  divisionId: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNo?: InputMaybe<Scalars['String']['input']>;
  type: SchoolType;
};

export type SchoolModel = {
  __typename?: 'SchoolModel';
  address?: Maybe<Scalars['String']['output']>;
  allClasses: Array<ClassModel>;
  censusNo?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  division?: Maybe<Division>;
  divisionId?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  phoneNo?: Maybe<Scalars['String']['output']>;
  recentSchoolPrincipalEnrollments: Array<SchoolPrincipalEnrollmentModel>;
  recentSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  recentSchoolStudentEnrollments: Array<SchoolStudentEnrollmentModel>;
  recentSchoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequestModel>;
  recentSchoolTeacherEnrollments: Array<SchoolTeacherEnrollmentModel>;
  type?: Maybe<SchoolType>;
};

export type SchoolModelFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  allClasses?: InputMaybe<ListFilterInputTypeOfClassModelFilterInput>;
  and?: InputMaybe<Array<SchoolModelFilterInput>>;
  censusNo?: InputMaybe<StringOperationFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  division?: InputMaybe<DivisionFilterInput>;
  divisionId?: InputMaybe<IntOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  location?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolModelFilterInput>>;
  phoneNo?: InputMaybe<StringOperationFilterInput>;
  recentSchoolPrincipalEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolPrincipalEnrollmentModelFilterInput>;
  recentSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  recentSchoolStudentEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentModelFilterInput>;
  recentSchoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestModelFilterInput>;
  recentSchoolTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentModelFilterInput>;
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
  division?: InputMaybe<DivisionSortInput>;
  divisionId?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  label?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  location?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
  phoneNo?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
};

export type SchoolPrincipalEnrollment = {
  __typename?: 'SchoolPrincipalEnrollment';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no: Scalars['Int']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  principal: Principal;
  principalId: Scalars['Long']['output'];
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  school: School;
  schoolId: Scalars['Long']['output'];
  status: EnrollmentStatus;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type SchoolPrincipalEnrollmentFilterInput = {
  and?: InputMaybe<Array<SchoolPrincipalEnrollmentFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolPrincipalEnrollmentFilterInput>>;
  principal?: InputMaybe<PrincipalFilterInput>;
  principalId?: InputMaybe<LongOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  school?: InputMaybe<SchoolFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<EnrollmentStatusOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
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
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no?: Maybe<Scalars['Int']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  principal?: Maybe<PrincipalModel>;
  principalId?: Maybe<Scalars['Long']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  school?: Maybe<SchoolModel>;
  schoolId?: Maybe<Scalars['Long']['output']>;
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
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolPrincipalEnrollmentModelFilterInput>>;
  principal?: InputMaybe<PrincipalModelFilterInput>;
  principalId?: InputMaybe<LongOperationFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  school?: InputMaybe<SchoolModelFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type SchoolStudentEnrollment = {
  __typename?: 'SchoolStudentEnrollment';
  classStudentEnrollments: Array<ClassStudentEnrollment>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no: Scalars['Int']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  school: School;
  schoolId: Scalars['Long']['output'];
  schoolStudentEnrollmentRequest?: Maybe<SchoolStudentEnrollmentRequest>;
  schoolStudentEnrollmentRequestId?: Maybe<Scalars['Long']['output']>;
  status: EnrollmentStatus;
  student: Student;
  studentId: Scalars['Long']['output'];
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type SchoolStudentEnrollmentFilterInput = {
  and?: InputMaybe<Array<SchoolStudentEnrollmentFilterInput>>;
  classStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolStudentEnrollmentFilterInput>>;
  school?: InputMaybe<SchoolFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  schoolStudentEnrollmentRequest?: InputMaybe<SchoolStudentEnrollmentRequestFilterInput>;
  schoolStudentEnrollmentRequestId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<EnrollmentStatusOperationFilterInput>;
  student?: InputMaybe<StudentFilterInput>;
  studentId?: InputMaybe<LongOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type SchoolStudentEnrollmentInput = {
  academicYearYear: Scalars['Int']['input'];
  classId: Scalars['Long']['input'];
  id?: InputMaybe<Scalars['Long']['input']>;
  no?: InputMaybe<Scalars['Int']['input']>;
  personId: Scalars['Long']['input'];
  schoolId: Scalars['Long']['input'];
  schoolStudentEnrollmentRequestId?: InputMaybe<Scalars['Long']['input']>;
  time?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SchoolStudentEnrollmentModel = {
  __typename?: 'SchoolStudentEnrollmentModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no?: Maybe<Scalars['Int']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  recentClassStudentEnrollments: Array<ClassStudentEnrollmentModel>;
  school?: Maybe<SchoolModel>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  schoolStudentEnrollmentRequest?: Maybe<SchoolStudentEnrollmentRequestModel>;
  schoolStudentEnrollmentRequestId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<EnrollmentStatus>;
  student?: Maybe<StudentModel>;
  studentId?: Maybe<Scalars['Long']['output']>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type SchoolStudentEnrollmentModelFilterInput = {
  and?: InputMaybe<Array<SchoolStudentEnrollmentModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolStudentEnrollmentModelFilterInput>>;
  recentClassStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentModelFilterInput>;
  school?: InputMaybe<SchoolModelFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  schoolStudentEnrollmentRequest?: InputMaybe<SchoolStudentEnrollmentRequestModelFilterInput>;
  schoolStudentEnrollmentRequestId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  student?: InputMaybe<StudentModelFilterInput>;
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
  label?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  no?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
  school?: InputMaybe<SchoolModelSortInput>;
  schoolId?: InputMaybe<SortEnumType>;
  schoolStudentEnrollmentRequest?: InputMaybe<SchoolStudentEnrollmentRequestModelSortInput>;
  schoolStudentEnrollmentRequestId?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  student?: InputMaybe<StudentModelSortInput>;
  studentId?: InputMaybe<SortEnumType>;
  time?: InputMaybe<SortEnumType>;
};

export type SchoolStudentEnrollmentRequest = {
  __typename?: 'SchoolStudentEnrollmentRequest';
  academicYear: AcademicYear;
  academicYearYear: Scalars['Int']['output'];
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  grade: Grade;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person: Person;
  personId: Scalars['Long']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  school: School;
  schoolId: Scalars['Long']['output'];
  schoolStudentEnrollment?: Maybe<SchoolStudentEnrollment>;
  status: RequestStatus;
};

export type SchoolStudentEnrollmentRequestFilterInput = {
  academicYear?: InputMaybe<AcademicYearFilterInput>;
  academicYearYear?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<SchoolStudentEnrollmentRequestFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  grade?: InputMaybe<GradeOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolStudentEnrollmentRequestFilterInput>>;
  person?: InputMaybe<PersonFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  reason?: InputMaybe<StringOperationFilterInput>;
  school?: InputMaybe<SchoolFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  schoolStudentEnrollment?: InputMaybe<SchoolStudentEnrollmentFilterInput>;
  status?: InputMaybe<RequestStatusOperationFilterInput>;
};

export type SchoolStudentEnrollmentRequestInput = {
  academicYearYear: Scalars['Int']['input'];
  grade: Grade;
  id?: InputMaybe<Scalars['Long']['input']>;
  personId: Scalars['Long']['input'];
  schoolId: Scalars['Long']['input'];
};

export type SchoolStudentEnrollmentRequestModel = {
  __typename?: 'SchoolStudentEnrollmentRequestModel';
  academicYear?: Maybe<AcademicYearModel>;
  academicYearYear?: Maybe<Scalars['Int']['output']>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  grade?: Maybe<Grade>;
  id?: Maybe<Scalars['Long']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person?: Maybe<PersonModel>;
  personId?: Maybe<Scalars['Long']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  school?: Maybe<SchoolModel>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  schoolStudentEnrollment?: Maybe<SchoolStudentEnrollmentModel>;
  schoolStudentEnrollmentId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<RequestStatus>;
};

export type SchoolStudentEnrollmentRequestModelFilterInput = {
  academicYear?: InputMaybe<AcademicYearModelFilterInput>;
  academicYearYear?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<SchoolStudentEnrollmentRequestModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  grade?: InputMaybe<NullableOfGradeOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolStudentEnrollmentRequestModelFilterInput>>;
  person?: InputMaybe<PersonModelFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  reason?: InputMaybe<StringOperationFilterInput>;
  school?: InputMaybe<SchoolModelFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  schoolStudentEnrollment?: InputMaybe<SchoolStudentEnrollmentModelFilterInput>;
  schoolStudentEnrollmentId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfRequestStatusOperationFilterInput>;
};

export type SchoolStudentEnrollmentRequestModelSortInput = {
  academicYear?: InputMaybe<AcademicYearModelSortInput>;
  academicYearYear?: InputMaybe<SortEnumType>;
  createdTime?: InputMaybe<SortEnumType>;
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  grade?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  label?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
  person?: InputMaybe<PersonModelSortInput>;
  personId?: InputMaybe<SortEnumType>;
  reason?: InputMaybe<SortEnumType>;
  school?: InputMaybe<SchoolModelSortInput>;
  schoolId?: InputMaybe<SortEnumType>;
  schoolStudentEnrollment?: InputMaybe<SchoolStudentEnrollmentModelSortInput>;
  schoolStudentEnrollmentId?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
};

export type SchoolStudentEnrollmentRequestStatusUpdateInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status: RequestStatus;
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

export type SchoolSubscription = {
  __typename?: 'SchoolSubscription';
  classStudentEnrollmentProcessed: ClassStudentEnrollmentModel;
  schoolStudentEnrollmentProcessed: SchoolStudentEnrollmentModel;
  schoolStudentEnrollmentRequestProcessed: SchoolStudentEnrollmentRequestModel;
};

export type SchoolTeacherEnrollment = {
  __typename?: 'SchoolTeacherEnrollment';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no: Scalars['Int']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  school: School;
  schoolId: Scalars['Long']['output'];
  status: EnrollmentStatus;
  teacher: Teacher;
  teacherClassEnrollments: Array<ClassTeacherEnrollment>;
  teacherId: Scalars['Long']['output'];
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type SchoolTeacherEnrollmentFilterInput = {
  and?: InputMaybe<Array<SchoolTeacherEnrollmentFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolTeacherEnrollmentFilterInput>>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  school?: InputMaybe<SchoolFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<EnrollmentStatusOperationFilterInput>;
  teacher?: InputMaybe<TeacherFilterInput>;
  teacherClassEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentFilterInput>;
  teacherId?: InputMaybe<LongOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
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
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  no?: Maybe<Scalars['Int']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  recentTeacherClassEnrollments: Array<ClassTeacherEnrollmentModel>;
  removedTime?: Maybe<Scalars['DateTime']['output']>;
  school?: Maybe<SchoolModel>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<EnrollmentStatus>;
  teacher?: Maybe<TeacherModel>;
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
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  no?: InputMaybe<IntOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolTeacherEnrollmentModelFilterInput>>;
  recentTeacherClassEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentModelFilterInput>;
  removedTime?: InputMaybe<DateTimeOperationFilterInput>;
  school?: InputMaybe<SchoolModelFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfEnrollmentStatusOperationFilterInput>;
  teacher?: InputMaybe<TeacherModelFilterInput>;
  teacherId?: InputMaybe<LongOperationFilterInput>;
  time?: InputMaybe<DateTimeOperationFilterInput>;
};

export type SchoolTeacherEnrollmentRequest = {
  __typename?: 'SchoolTeacherEnrollmentRequest';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person: Person;
  personId: Scalars['Long']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  school: School;
  schoolId: Scalars['Long']['output'];
  status: RequestStatus;
};

export type SchoolTeacherEnrollmentRequestFilterInput = {
  and?: InputMaybe<Array<SchoolTeacherEnrollmentRequestFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolTeacherEnrollmentRequestFilterInput>>;
  person?: InputMaybe<PersonFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  reason?: InputMaybe<StringOperationFilterInput>;
  school?: InputMaybe<SchoolFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<RequestStatusOperationFilterInput>;
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
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person?: Maybe<PersonModel>;
  personId?: Maybe<Scalars['Long']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  school?: Maybe<SchoolModel>;
  schoolId?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<RequestStatus>;
  teacher?: Maybe<TeacherModel>;
  teacherId?: Maybe<Scalars['Long']['output']>;
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
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SchoolTeacherEnrollmentRequestModelFilterInput>>;
  person?: InputMaybe<PersonModelFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  reason?: InputMaybe<StringOperationFilterInput>;
  school?: InputMaybe<SchoolModelFilterInput>;
  schoolId?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfRequestStatusOperationFilterInput>;
  teacher?: InputMaybe<TeacherModelFilterInput>;
  teacherId?: InputMaybe<LongOperationFilterInput>;
};

export enum SchoolType {
  Type1Ab = 'TYPE1_AB',
  Type1C = 'TYPE1_C',
  Type2 = 'TYPE2',
  Type3I = 'TYPE3I',
  Type3Ii = 'TYPE3II'
}

export type SchoolTypeOperationFilterInput = {
  eq?: InputMaybe<SchoolType>;
  in?: InputMaybe<Array<SchoolType>>;
  neq?: InputMaybe<SchoolType>;
  nin?: InputMaybe<Array<SchoolType>>;
};

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
  NotApplicable = 'NOT_APPLICABLE'
}

export type SexOperationFilterInput = {
  eq?: InputMaybe<Sex>;
  in?: InputMaybe<Array<Sex>>;
  neq?: InputMaybe<Sex>;
  nin?: InputMaybe<Array<Sex>>;
};

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

export type Student = {
  __typename?: 'Student';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person: Person;
  personId: Scalars['Long']['output'];
  schoolStudentEnrollments: Array<SchoolStudentEnrollment>;
};

export type StudentFilterInput = {
  and?: InputMaybe<Array<StudentFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<StudentFilterInput>>;
  person?: InputMaybe<PersonFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  schoolStudentEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentFilterInput>;
};

export type StudentInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bcNo?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Long']['input']>;
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
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  recentPerson1Relationships: Array<PersonRelationshipModel>;
  recentPerson2Relationships: Array<PersonRelationshipModel>;
  recentSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  recentSchoolStudentEnrollments: Array<SchoolStudentEnrollmentModel>;
  recentSchoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequestModel>;
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
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<StudentModelFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  recentPerson1Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipModelFilterInput>;
  recentPerson2Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipModelFilterInput>;
  recentSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  recentSchoolStudentEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentModelFilterInput>;
  recentSchoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestModelFilterInput>;
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
  label?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  mobileNo?: InputMaybe<SortEnumType>;
  nicNo?: InputMaybe<SortEnumType>;
  nickname?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
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

export type Teacher = {
  __typename?: 'Teacher';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  id: Scalars['Long']['output'];
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person: Person;
  personId: Scalars['Long']['output'];
  registrationNo?: Maybe<Scalars['String']['output']>;
  schoolTeacherEnrollments: Array<SchoolTeacherEnrollment>;
  serviceGrade?: Maybe<Scalars['String']['output']>;
};

export type TeacherFilterInput = {
  and?: InputMaybe<Array<TeacherFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TeacherFilterInput>>;
  person?: InputMaybe<PersonFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  registrationNo?: InputMaybe<StringOperationFilterInput>;
  schoolTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentFilterInput>;
  serviceGrade?: InputMaybe<StringOperationFilterInput>;
};

export type TeacherInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bcNo?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Long']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  nicNo?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  passportNo?: InputMaybe<Scalars['String']['input']>;
  sex: Sex;
  shortName: Scalars['String']['input'];
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
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  nicNo?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  passportNo?: Maybe<Scalars['String']['output']>;
  recentPerson1Relationships: Array<PersonRelationshipModel>;
  recentPerson2Relationships: Array<PersonRelationshipModel>;
  recentSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  recentSchoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequestModel>;
  recentSchoolTeacherEnrollments: Array<SchoolTeacherEnrollmentModel>;
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
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  mobileNo?: InputMaybe<StringOperationFilterInput>;
  nicNo?: InputMaybe<StringOperationFilterInput>;
  nickname?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TeacherModelFilterInput>>;
  passportNo?: InputMaybe<StringOperationFilterInput>;
  recentPerson1Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipModelFilterInput>;
  recentPerson2Relationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipModelFilterInput>;
  recentSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  recentSchoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestModelFilterInput>;
  recentSchoolTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentModelFilterInput>;
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
  label?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  mobileNo?: InputMaybe<SortEnumType>;
  nicNo?: InputMaybe<SortEnumType>;
  nickname?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
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

export type User = {
  __typename?: 'User';
  createdClassStudentEnrollments: Array<ClassStudentEnrollment>;
  createdClassTeacherClassEnrollments: Array<ClassTeacherEnrollment>;
  createdClasses: Array<Class>;
  createdPersonQualifications: Array<PersonQualification>;
  createdPersonRelationships: Array<PersonRelationship>;
  createdPersons: Array<Person>;
  createdPrincipals: Array<Principal>;
  createdSchoolPrincipalEnrollments: Array<SchoolPrincipalEnrollment>;
  createdSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequest>;
  createdSchoolStudentEnrollments: Array<SchoolStudentEnrollment>;
  createdSchoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequest>;
  createdSchoolTeacherEnrollments: Array<SchoolTeacherEnrollment>;
  createdSchools: Array<School>;
  createdStudents: Array<Student>;
  createdTeachers: Array<Teacher>;
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<User>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  createdUsers: Array<User>;
  deletedClassStudentEnrollments: Array<ClassStudentEnrollment>;
  deletedClassTeacherClassEnrollments: Array<ClassTeacherEnrollment>;
  deletedClasses: Array<Class>;
  deletedPersonQualifications: Array<PersonQualification>;
  deletedPersonRelationships: Array<PersonRelationship>;
  deletedPersons: Array<Person>;
  deletedPrincipals: Array<Principal>;
  deletedSchoolPrincipalEnrollments: Array<SchoolPrincipalEnrollment>;
  deletedSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequest>;
  deletedSchoolStudentEnrollments: Array<SchoolStudentEnrollment>;
  deletedSchoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequest>;
  deletedSchoolTeacherEnrollments: Array<SchoolTeacherEnrollment>;
  deletedSchools: Array<School>;
  deletedStudents: Array<Student>;
  deletedTeachers: Array<Teacher>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  deletedUsers: Array<User>;
  emailOtp?: Maybe<Scalars['String']['output']>;
  emailOtpExpiration?: Maybe<Scalars['DateTime']['output']>;
  emailToken?: Maybe<Scalars['String']['output']>;
  emailTokenExpiration?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Long']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isMobileNoVerified: Scalars['Boolean']['output'];
  lastModifiedClassStudentEnrollments: Array<ClassStudentEnrollment>;
  lastModifiedClassTeacherClassEnrollments: Array<ClassTeacherEnrollment>;
  lastModifiedClasses: Array<Class>;
  lastModifiedPersonQualifications: Array<PersonQualification>;
  lastModifiedPersonRelationships: Array<PersonRelationship>;
  lastModifiedPersons: Array<Person>;
  lastModifiedPrincipals: Array<Principal>;
  lastModifiedSchoolPrincipalEnrollments: Array<SchoolPrincipalEnrollment>;
  lastModifiedSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequest>;
  lastModifiedSchoolStudentEnrollments: Array<SchoolStudentEnrollment>;
  lastModifiedSchoolTeacherEnrollmentRequests: Array<SchoolTeacherEnrollmentRequest>;
  lastModifiedSchoolTeacherEnrollments: Array<SchoolTeacherEnrollment>;
  lastModifiedSchools: Array<School>;
  lastModifiedStudents: Array<Student>;
  lastModifiedTeachers: Array<Teacher>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<User>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  lastModifiedUsers: Array<User>;
  mobileNoOtp?: Maybe<Scalars['String']['output']>;
  mobileNoOtpExpiration?: Maybe<Scalars['DateTime']['output']>;
  mobileNoToken?: Maybe<Scalars['String']['output']>;
  mobileNoTokenExpiration?: Maybe<Scalars['DateTime']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  person: Person;
  personId: Scalars['Long']['output'];
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  createdClassStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentFilterInput>;
  createdClassTeacherClassEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentFilterInput>;
  createdClasses?: InputMaybe<ListFilterInputTypeOfClassFilterInput>;
  createdPersonQualifications?: InputMaybe<ListFilterInputTypeOfPersonQualificationFilterInput>;
  createdPersonRelationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipFilterInput>;
  createdPersons?: InputMaybe<ListFilterInputTypeOfPersonFilterInput>;
  createdPrincipals?: InputMaybe<ListFilterInputTypeOfPrincipalFilterInput>;
  createdSchoolPrincipalEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolPrincipalEnrollmentFilterInput>;
  createdSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestFilterInput>;
  createdSchoolStudentEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentFilterInput>;
  createdSchoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestFilterInput>;
  createdSchoolTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentFilterInput>;
  createdSchools?: InputMaybe<ListFilterInputTypeOfSchoolFilterInput>;
  createdStudents?: InputMaybe<ListFilterInputTypeOfStudentFilterInput>;
  createdTeachers?: InputMaybe<ListFilterInputTypeOfTeacherFilterInput>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  createdUsers?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
  deletedClassStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentFilterInput>;
  deletedClassTeacherClassEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentFilterInput>;
  deletedClasses?: InputMaybe<ListFilterInputTypeOfClassFilterInput>;
  deletedPersonQualifications?: InputMaybe<ListFilterInputTypeOfPersonQualificationFilterInput>;
  deletedPersonRelationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipFilterInput>;
  deletedPersons?: InputMaybe<ListFilterInputTypeOfPersonFilterInput>;
  deletedPrincipals?: InputMaybe<ListFilterInputTypeOfPrincipalFilterInput>;
  deletedSchoolPrincipalEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolPrincipalEnrollmentFilterInput>;
  deletedSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestFilterInput>;
  deletedSchoolStudentEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentFilterInput>;
  deletedSchoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestFilterInput>;
  deletedSchoolTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentFilterInput>;
  deletedSchools?: InputMaybe<ListFilterInputTypeOfSchoolFilterInput>;
  deletedStudents?: InputMaybe<ListFilterInputTypeOfStudentFilterInput>;
  deletedTeachers?: InputMaybe<ListFilterInputTypeOfTeacherFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  deletedUsers?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
  emailOtp?: InputMaybe<StringOperationFilterInput>;
  emailOtpExpiration?: InputMaybe<DateTimeOperationFilterInput>;
  emailToken?: InputMaybe<StringOperationFilterInput>;
  emailTokenExpiration?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  isEmailVerified?: InputMaybe<BooleanOperationFilterInput>;
  isMobileNoVerified?: InputMaybe<BooleanOperationFilterInput>;
  lastModifiedClassStudentEnrollments?: InputMaybe<ListFilterInputTypeOfClassStudentEnrollmentFilterInput>;
  lastModifiedClassTeacherClassEnrollments?: InputMaybe<ListFilterInputTypeOfClassTeacherEnrollmentFilterInput>;
  lastModifiedClasses?: InputMaybe<ListFilterInputTypeOfClassFilterInput>;
  lastModifiedPersonQualifications?: InputMaybe<ListFilterInputTypeOfPersonQualificationFilterInput>;
  lastModifiedPersonRelationships?: InputMaybe<ListFilterInputTypeOfPersonRelationshipFilterInput>;
  lastModifiedPersons?: InputMaybe<ListFilterInputTypeOfPersonFilterInput>;
  lastModifiedPrincipals?: InputMaybe<ListFilterInputTypeOfPrincipalFilterInput>;
  lastModifiedSchoolPrincipalEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolPrincipalEnrollmentFilterInput>;
  lastModifiedSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestFilterInput>;
  lastModifiedSchoolStudentEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentFilterInput>;
  lastModifiedSchoolTeacherEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentRequestFilterInput>;
  lastModifiedSchoolTeacherEnrollments?: InputMaybe<ListFilterInputTypeOfSchoolTeacherEnrollmentFilterInput>;
  lastModifiedSchools?: InputMaybe<ListFilterInputTypeOfSchoolFilterInput>;
  lastModifiedStudents?: InputMaybe<ListFilterInputTypeOfStudentFilterInput>;
  lastModifiedTeachers?: InputMaybe<ListFilterInputTypeOfTeacherFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  lastModifiedUsers?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
  mobileNoOtp?: InputMaybe<StringOperationFilterInput>;
  mobileNoOtpExpiration?: InputMaybe<DateTimeOperationFilterInput>;
  mobileNoToken?: InputMaybe<StringOperationFilterInput>;
  mobileNoTokenExpiration?: InputMaybe<DateTimeOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  password?: InputMaybe<StringOperationFilterInput>;
  person?: InputMaybe<PersonFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
};

export type UserModel = {
  __typename?: 'UserModel';
  createdTime?: Maybe<Scalars['DateTime']['output']>;
  createdUser?: Maybe<UserModel>;
  createdUserId?: Maybe<Scalars['Long']['output']>;
  currentSchoolId?: Maybe<Scalars['Long']['output']>;
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  deletedUser?: Maybe<UserModel>;
  deletedUserId?: Maybe<Scalars['Long']['output']>;
  guardianId?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isMobileNoVerified?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedUser?: Maybe<UserModel>;
  lastModifiedUserId?: Maybe<Scalars['Long']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  person?: Maybe<PersonModel>;
  personId?: Maybe<Scalars['Long']['output']>;
  principalId?: Maybe<Scalars['Long']['output']>;
  recentCreatedPersons: Array<PersonModel>;
  recentCreatedSchoolStudentEnrollmentRequests: Array<SchoolStudentEnrollmentRequestModel>;
  staffId?: Maybe<Scalars['Long']['output']>;
  studentId?: Maybe<Scalars['Long']['output']>;
  teacherId?: Maybe<Scalars['Long']['output']>;
};

export type UserModelFilterInput = {
  and?: InputMaybe<Array<UserModelFilterInput>>;
  createdTime?: InputMaybe<DateTimeOperationFilterInput>;
  createdUser?: InputMaybe<UserModelFilterInput>;
  createdUserId?: InputMaybe<LongOperationFilterInput>;
  currentSchoolId?: InputMaybe<LongOperationFilterInput>;
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  deletedUser?: InputMaybe<UserModelFilterInput>;
  deletedUserId?: InputMaybe<LongOperationFilterInput>;
  guardianId?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  isEmailVerified?: InputMaybe<BooleanOperationFilterInput>;
  isMobileNoVerified?: InputMaybe<BooleanOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  lastModifiedTime?: InputMaybe<DateTimeOperationFilterInput>;
  lastModifiedUser?: InputMaybe<UserModelFilterInput>;
  lastModifiedUserId?: InputMaybe<LongOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserModelFilterInput>>;
  person?: InputMaybe<PersonModelFilterInput>;
  personId?: InputMaybe<LongOperationFilterInput>;
  principalId?: InputMaybe<LongOperationFilterInput>;
  recentCreatedPersons?: InputMaybe<ListFilterInputTypeOfPersonModelFilterInput>;
  recentCreatedSchoolStudentEnrollmentRequests?: InputMaybe<ListFilterInputTypeOfSchoolStudentEnrollmentRequestModelFilterInput>;
  staffId?: InputMaybe<LongOperationFilterInput>;
  studentId?: InputMaybe<LongOperationFilterInput>;
  teacherId?: InputMaybe<LongOperationFilterInput>;
};

export type UserModelSortInput = {
  createdTime?: InputMaybe<SortEnumType>;
  createdUser?: InputMaybe<UserModelSortInput>;
  createdUserId?: InputMaybe<SortEnumType>;
  currentSchoolId?: InputMaybe<SortEnumType>;
  deletedTime?: InputMaybe<SortEnumType>;
  deletedUser?: InputMaybe<UserModelSortInput>;
  deletedUserId?: InputMaybe<SortEnumType>;
  guardianId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isEmailVerified?: InputMaybe<SortEnumType>;
  isMobileNoVerified?: InputMaybe<SortEnumType>;
  label?: InputMaybe<SortEnumType>;
  lastModifiedTime?: InputMaybe<SortEnumType>;
  lastModifiedUser?: InputMaybe<UserModelSortInput>;
  lastModifiedUserId?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
  person?: InputMaybe<PersonModelSortInput>;
  personId?: InputMaybe<SortEnumType>;
  principalId?: InputMaybe<SortEnumType>;
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

export type Zone = {
  __typename?: 'Zone';
  district: District;
  districtId: Scalars['Int']['output'];
  divisions: Array<Division>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  sinhalaName: Scalars['String']['output'];
  tamilName: Scalars['String']['output'];
};

export type ZoneFilterInput = {
  and?: InputMaybe<Array<ZoneFilterInput>>;
  district?: InputMaybe<DistrictFilterInput>;
  districtId?: InputMaybe<IntOperationFilterInput>;
  divisions?: InputMaybe<ListFilterInputTypeOfDivisionFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ZoneFilterInput>>;
  sinhalaName?: InputMaybe<StringOperationFilterInput>;
  tamilName?: InputMaybe<StringOperationFilterInput>;
};

export type ZoneSortInput = {
  district?: InputMaybe<DistrictSortInput>;
  districtId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  sinhalaName?: InputMaybe<SortEnumType>;
  tamilName?: InputMaybe<SortEnumType>;
};
