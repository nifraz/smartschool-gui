import { gql } from "apollo-angular";

export const SCHOOL_STUDENT_ENROLLMENT_CREATED = gql`
    subscription schoolStudentEnrollmentCreated {
        schoolStudentEnrollmentCreated {
            id
            status
            schoolId
            studentId
            schoolStudentEnrollmentRequestId
        }
    }
`;