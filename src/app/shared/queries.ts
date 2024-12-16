import { gql } from "apollo-angular";
import { AGE_FIELDS } from "./fragments";

export const GET_USER = gql`
  query getUser($id: Long!) {
    user(id: $id) {
      id
      person {
        id
        label
        address
        bcNo
        mobileNo
        dateOfBirth
        email
        fullName
        nickname
        nicNo
        passportNo
        sex
        shortName
        image
        ...age
      }
      currentSchoolId
  
      guardianId
      studentId
      staffId
      teacherId
      principalId

      recentCreatedSchoolStudentEnrollmentRequests {
        id
        grade
        status
        schoolId
        school {
          id
          name
        }
        personId
        person {
          id
          fullName
          ...age
        }
      }

      recentCreatedPersons {
        id
        fullName
        sex
        ...age
      }
    }
  }
  ${AGE_FIELDS}
`;

export const GET_PERSONS_CREATED_BY_USER = gql`
  query getPersons($filter: Long!) {
    persons(
      skip: 0
      take: 20
      where: { and: [{createdUserId: {eq: $filter}}] }
    ) {
      items {
        id
        label
        address
        bcNo
        mobileNo
        dateOfBirth
        email
        fullName
        nickname
        nicNo
        passportNo
        sex
        shortName
        image
        ...age
      }
    }
  }
  ${AGE_FIELDS}
`;

export const GET_SCHOOL_STUDENT_ENROLLMENT_REQUEST = gql`
  query getSchoolStudentEnrollmentRequest($id: Long!) {
    schoolStudentEnrollmentRequest(id: $id) {
      id
      grade
      status
      reason
      personId
      person {
        id
        address
        bcNo
        mobileNo
        dateOfBirth
        email
        fullName
        nickname
        nicNo
        passportNo
        sex
        shortName
        ...age
      }
      schoolId
      school {
        id
        censusNo
        name
        address
        email
        phoneNo
        type
      }
      schoolStudentEnrollment {
        id
        no
      }
      academicYearYear
      createdUserId
    }
  }
  ${AGE_FIELDS}
`;

export const GET_SCHOOL_STUDENT_ENROLLMENT = gql`
  query getSchoolStudentEnrollment($id: Long!) {
    schoolStudentEnrollment(id: $id) {
      id
      no
      schoolId
      school {
        id
        censusNo
        name
        address
        email
        phoneNo
        type
      }
      status
      studentId
      student {
        id
        address
        bcNo
        mobileNo
        dateOfBirth
        email
        fullName
        nickname
        nicNo
        passportNo
        sex
        shortName
        age {
          years
          months
          days
          shortString
          longString
        }
      }
      time
      schoolStudentEnrollmentRequest {
        id
      }
      recentClassStudentEnrollments {
        id
        rollNo
        academicYearYear
        classId
        removeReason
        removedTime
        status
        time
      }

      createdTime
      createdUserId
    }
  }
`;

export const GET_DIVISIONS_FILTERED_BY_NAME = gql`
  query getDivisions($filter: String!) {
    divisions(
      skip: 0
      take: 20
      where: { and: [{label: {contains: $filter}}] }
    ) {
      items {
        id
        label
        name
      }
    }
  }
`;

export const GET_SCHOOLS_FILTERED_BY_NAME = gql`
  query getSchools($filter: String!) {
    schools(
      skip: 0
      take: 20
      where: { and: [{label: {contains: $filter}}] }
    ) {
      items {
        id
        label
        censusNo
        name
        address
      }
    }
  }
`;

export const GET_SCHOOL = gql`
  query getSchool($id: Long!) {
    school(id: $id) {
      id
      label
      censusNo
      name
      location
      address
      email
      phoneNo
      type
      allClasses {
        id
        grade
        section
        language {
          code
          name
          label
        }
        schoolId
      }
      recentSchoolStudentEnrollmentRequests {
        id
        grade
        status
        personId
        person {
          id
          fullName
          ...age
        }
        createdUserId
      }
      recentSchoolStudentEnrollments {
        id
        status
        studentId
        student {
          id
          id
          fullName
          age {
            years
            months
            days
            shortString
            longString
          }
        }
        createdUserId
      }
    }
  }
  ${AGE_FIELDS}
`;

export const GET_SCHOOL_REPORT = gql`
  query getSchoolReport($input: SchoolReportInput!) {
    schoolReport(input: $input) {
      currentDate
      endTime
      noOfActiveStudentEnrollments
      noOfActiveTeacherEnrollments
      noOfApprovedStudentEnrollmentRequests
      noOfCancelledStudentEnrollments
      noOfCancelledStudentEnrollmentRequests
      noOfCancelledTeacherEnrollments
      noOfCompletedStudentEnrollments
      noOfLeftStudentEnrollments
      noOfRejectedStudentEnrollmentRequests
      noOfResignedTeacherEnrollments
      noOfRetiredTeacherEnrollments
      noOfStudentEnrollmentRequests
      noOfStudentEnrollments
      noOfTeacherEnrollments
      principal {
        id
        fullName
      }
      school {
        id
        label
        censusNo
        name
        location
        address
        email
        phoneNo
        type
        division {
          label
        }
      }
      startTime
    }
  }
`;

// export const GET_CLASS = gql`
//   query getClass($id: Long!) {
//     class(id: $id) {
//       id
//       grade
//       section
//       languageCode
//       languageName
//       location
//       schoolId
//       classStudentEnrollments
//     }
//   }
// `;

export const GET_CLASS = gql`
  query getClass($id: Long!) {
    class(id: $id) {
      id
      grade
      section
      languageCode
      language {
        name
        code
        label
      }
      location
      schoolId
      school {
        id
        censusNo
        name
        address
        email
        phoneNo
        type
      }
      recentClassStudentEnrollments {
        id
        rollNo
        academicYearYear
        removeReason
        removedTime
        schoolStudentEnrollmentId
        status
        student {
          id
          label
        }
        studentId
        time
      }
    }
  }
`;

export const GET_STUDENT = gql`
  query getStudent($id: Long!) {
    student(id: $id) {
      id
      address
      bcNo
      mobileNo
      dateOfBirth
      email
      fullName
      nickname
      nicNo
      passportNo
      sex
      shortName
      age {
        years
        months
        days
        shortString
        longString
      }
      recentSchoolStudentEnrollments {
        id
        no
        time
        status
        schoolId
        school {
          id
          label
        }
      }
    }
  }
`;

export const GET_TEACHER = gql`
  query getTeacher($id: Long!) {
    teacher(id: $id) {
      id
      address
      bcNo
      mobileNo
      dateOfBirth
      email
      fullName
      nickname
      nicNo
      passportNo
      sex
      shortName
      age {
        years
        months
        days
        shortString
        longString
      }
      recentSchoolTeacherEnrollments {
        id
        no
        time
        status
        schoolId
        school {
          id
          label
        }
      }
    }
  }
`;

export const GET_ACADEMIC_YEARS = gql`
  query getAcademicYears {
    academicYears {
      items {
        year
        endDate
        startDate
      }
    }
  }
`;

export const GET_CLASSES_BY_SCHOOL = gql`
  query getClassesBySchool($schoolId: Long!) {
    classes(
      where: { and: [{ schoolId: { eq: $schoolId } }] }
    ) {
      items {
        id
        grade
        section
        languageCode
        language {
          code
          name
          label
        }
        location
        schoolId
      }
    }
  }
`;