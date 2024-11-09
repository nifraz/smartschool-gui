export const CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST = `
  mutation createSchoolStudentEnrollmentRequest($input: SchoolStudentEnrollmentRequestInput!) {
    createSchoolStudentEnrollmentRequest(input: $input) {
      id
    }
  }
`;

export const UPDATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST_STATUS = `
  mutation updateSchoolStudentEnrollmentRequestStatus($id: Long!, $input: SchoolStudentEnrollmentRequestStatusUpdateInput!) {
    updateSchoolStudentEnrollmentRequestStatus(id: $id, input: $input) {
      id
    }
  }
`;

export const CREATE_SCHOOL_STUDENT_ENROLLMENT = `
  mutation createSchoolStudentEnrollment($input: SchoolStudentEnrollmentInput!) {
    createSchoolStudentEnrollment(input: $input) {
      id
    }
  }
`;
