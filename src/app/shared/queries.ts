
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
      guid
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
      guid
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