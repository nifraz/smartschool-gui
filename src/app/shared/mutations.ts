import { gql } from "apollo-angular";

export const CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST = gql`
  mutation createSchoolStudentEnrollmentRequest($input: SchoolStudentEnrollmentRequestInput!) {
    createSchoolStudentEnrollmentRequest(input: $input) {
      id
    }
  }
`;

export const UPDATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST_STATUS = gql`
  mutation updateSchoolStudentEnrollmentRequestStatus($input: SchoolStudentEnrollmentRequestStatusUpdateInput!) {
    updateSchoolStudentEnrollmentRequestStatus(input: $input) {
      id
    }
  }
`;

export const CREATE_SCHOOL_STUDENT_ENROLLMENT = gql`
  mutation createSchoolStudentEnrollment($input: SchoolStudentEnrollmentInput!) {
    createSchoolStudentEnrollment(input: $input) {
      id
    }
  }
`;

export const CREATE_PERSON = gql`
  mutation createPerson($input: PersonInput!) {
    createPerson(input: $input) {
      id
    }
  }
`;

export const CREATE_PRINCIPAL = gql`
  mutation createPrincipal($input: PrincipalInput!) {
    createPrincipal(input: $input) {
      id
    }
  }
`;

export const CREATE_SCHOOL = gql`
  mutation createSchool($input: SchoolInput!) {
    createSchool(input: $input) {
      id
    }
  }
`;