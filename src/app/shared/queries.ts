import { gql } from "apollo-angular";

export const GET_USER = gql`
  query getUser($id: Long!) {
    user(id: $id) {
      id
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
        image
        age {
          years
          months
          days
          shortString
          longString
        }
      }
      currentSchoolId
  
      guardianId
      studentId
      staffId
      teacherId
      principalId

      createdSchoolStudentEnrollmentRequests {
        id
        grade
        status
        schoolId
        schoolName
        personId
        personFullName
      }
    }
  }
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
        age {
            years
            months
            days
        }
      }
      personFullName
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
      schoolName
      academicYearYear
      createdUserId
    }
  }
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
      schoolName
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
        }
      }
      studentFullName
      time
      schoolStudentEnrollmentRequest {
        id
      }
      classStudentEnrollments {
        id
        rollNo
        academicYear
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
      censusNo
      name
      address
      email
      phoneNo
      type
      classes {
        id
        grade
        section
        languageName
        schoolId
      }
      schoolStudentEnrollmentRequests {
        id
        grade
        status
        personId
        personFullName
        createdUserId
      }
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

export const GET_CLASS_BY_SCHOOL_GRADE_SECTION = gql`
  query getClassBySchoolGradeSection($schoolId: Long!, $grade: Grade!, $section: String!) {
    class(schoolId: $schoolId, grade: $grade, section: $section) {
      id
      grade
      section
      languageCode
      languageName
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
      classStudentEnrollments {
        id
        rollNo
        academicYear
        removeReason
        removedTime
        schoolStudentEnrollmentId
        status
        studentFullName
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
      }
      schoolStudentEnrollments {
        id
        no
        time
        status
        schoolId
        schoolName
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
      }
      schoolTeacherEnrollments {
        no
        time
        status
        schoolId
        schoolName
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
        languageName
        location
        schoolId
      }
    }
  }
`;