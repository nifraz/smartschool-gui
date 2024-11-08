
export const GET_USER = `
  query getUser($id: Long!) {
    user(id: $id) {
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
      currentSchoolId
  
      guardianId
      studentId
      staffId
      teacherId
      principalId

      age {
        years
        months
        days
      }
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

export const GET_STUDENT_EMAILS_COUNT = `
  query getStudentEmailsCount($email: String!) {
    students(
      skip: 0
      take: 1
      where: { and: [{email: {eq: $email}}] } 
    ) {
      totalCount
    }
  }
`;

export const GET_SCHOOL_STUDENT_ENROLLMENT_REQUEST = `
  query getSchoolStudentEnrollmentRequest($id: Long!) {
    schoolStudentEnrollmentRequest(id: $id) {
      id
      grade
      status
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
      schoolName

      createdTime
      createdUserId
      lastModifiedTime
      lastModifiedUserId
      deletedTime
      deletedUser
    }
  }
`;

export const GET_SCHOOL_STUDENT_ENROLLMENT = `
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
      lastModifiedTime
      lastModifiedUserId
      deletedTime
      deletedUserId
    }
  }
`;

export const GET_SCHOOL = `
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
        grade
        section
        languageName
        schoolId
      }
    }
  }
`;

// export const GET_CLASS = `
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

export const GET_CLASS_BY_SCHOOL_GRADE_SECTION = `
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

export const GET_STUDENT = `
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

export const GET_TEACHER = `
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