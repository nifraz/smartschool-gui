export const SCHOOL_STUDENT_ENROLLMENT_CREATED = `
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