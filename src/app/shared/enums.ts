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
  DIVISIONS = 'divisions',
  USERS = 'users',
  SCHOOLS = 'schools',
  SCHOOL_STUDENT_ENROLLMENT_REQUESTS = 'schoolStudentEnrollmentRequests',
  SCHOOL_STUDENT_ENROLLMENTS = 'schoolStudentEnrollments',
  CLASSES = 'classes',
  STUDENTS = 'students',
  PERSONS = 'persons',
  PRINCIPALS = 'principals',
  TEACHERS = 'teachers',
}

export enum GraphqlTypes {
  USER = 'user',
  SCHOOL = 'school',
  SCHOOL_STUDENT_ENROLLMENT_REQUEST = 'schoolStudentEnrollmentRequest',
  SCHOOL_STUDENT_ENROLLMENT = 'schoolStudentEnrollment',
  CLASS = 'class',
  STUDENT = 'student',
  PRINCIPAL = 'principal',
  TEACHER = 'teacher',
}
