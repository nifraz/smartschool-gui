import { gql } from "apollo-angular";

export const SCHOOL_STUDENT_ENROLLMENT_REQUEST_PROCESSED = gql`
    subscription schoolStudentEnrollmentRequestProcessed {
        schoolStudentEnrollmentRequestProcessed {
            id
            status
            schoolId
            personId
        }
    }
`;

export const SCHOOL_STUDENT_ENROLLMENT_PROCESSED = gql`
    subscription schoolStudentEnrollmentProcessed {
        schoolStudentEnrollmentProcessed {
            id
            status
            schoolId
            studentId
            schoolStudentEnrollmentRequestId
        }
    }
`;

export const CLASS_STUDENT_ENROLLMENT_PROCESSED = gql`
    subscription classStudentEnrollmentProcessed {
        schoolStudentEnrollmentProcessed {
            id
            status
            schoolId
            studentId
            schoolStudentEnrollmentRequestId
        }
    }
`;