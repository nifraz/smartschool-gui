import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { accountGuard } from './auth/guards/account.guard';
import { authGuard } from './auth/guards/auth.guard';
import { SchoolsComponent } from './schools/schools.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { TeacherDetailsComponent } from './teachers/teacher-details/teacher-details.component';
import { ClassDetailsComponent } from './schools/classes/class-details/class-details.component';
import { ClassStudentEnrollmentsComponent } from './schools/classes/class-student-enrollments/class-student-enrollments.component';
import { ClassTeacherEnrollmentsComponent } from './schools/classes/class-teacher-enrollments/class-teacher-enrollments.component';
import { SchoolStudentEnrollmentRequestsComponent } from './schools/school-student-enrollment-requests/school-student-enrollment-requests.component';
import { SchoolStudentEnrollmentsComponent } from './schools/school-student-enrollments/school-student-enrollments.component';
import { SchoolTeacherEnrollmentRequestsComponent } from './schools/school-teacher-enrollment-requests/school-teacher-enrollment-requests.component';
import { SchoolTeacherEnrollmentsComponent } from './schools/school-teacher-enrollments/school-teacher-enrollments.component';
import { SchoolStudentEnrollmentRequestDetailsComponent } from './schools/school-student-enrollment-requests/school-student-enrollment-request-details/school-student-enrollment-request-details.component';
import { SchoolStudentEnrollmentDetailsComponent } from './schools/school-student-enrollments/school-student-enrollment-details/school-student-enrollment-details.component';
import { SchoolTeacherEnrollmentRequestDetailsComponent } from './schools/school-teacher-enrollment-requests/school-teacher-enrollment-request-details/school-teacher-enrollment-request-details.component';
import { SchoolTeacherEnrollmentDetailsComponent } from './schools/school-teacher-enrollments/school-teacher-enrollment-details/school-teacher-enrollment-details.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserSchoolStudentEnrollmentRequestDetailsComponent } from './users/user-school-student-enrollment-requests/user-school-student-enrollment-request-details/user-school-student-enrollment-request-details.component';
import { UserSchoolStudentEnrollmentRequestsComponent } from './users/user-school-student-enrollment-requests/user-school-student-enrollment-requests.component';
import { UserSchoolTeacherEnrollmentRequestDetailsComponent } from './users/user-school-teacher-enrollment-requests/user-school-teacher-enrollment-request-details/user-school-teacher-enrollment-request-details.component';
import { UserSchoolTeacherEnrollmentRequestsComponent } from './users/user-school-teacher-enrollment-requests/user-school-teacher-enrollment-requests.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    //main
    { path: '', redirectTo: '/dashboard', pathMatch: 'full', },
    { path: 'dashboard', title: 'Dashboard | SmartSchool', component: DashboardComponent, },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: 'login', title: 'Login | SmartSchool', component: LoginComponent, canActivate: [accountGuard] },
            { path: 'register', title: 'Register | SmartSchool', component: RegisterComponent, canActivate: [accountGuard] },
        ],
    },

    //users
    { path: 'users', title: 'Users | SmartSchool', component: UsersComponent, canActivate: [authGuard] },
    { path: 'users/:id', title: 'User Details | SmartSchool', component: UserDetailsComponent, canActivate: [authGuard] },
    { path: 'users/:id/school-student-enrollment-requests', title: 'School Student Enrollment Requests | SmartSchool', component: UserSchoolStudentEnrollmentRequestsComponent, canActivate: [authGuard] },
    { path: 'users/:id/school-student-enrollment-request/:id', title: 'School Student Enrollment Request Details | SmartSchool', component: UserSchoolStudentEnrollmentRequestDetailsComponent, canActivate: [authGuard] },
    { path: 'users/:id/school-teacher-enrollment-requests', title: 'Users | SmartSchool', component: UserSchoolTeacherEnrollmentRequestsComponent, canActivate: [authGuard] },
    { path: 'users/:id/school-teacher-enrollment-request/:id', title: 'School Teacher Enrollment Request Details | SmartSchool', component: UserSchoolTeacherEnrollmentRequestDetailsComponent, canActivate: [authGuard] },

    //schools
    { path: 'schools', title: 'Schools | SmartSchool', component: SchoolsComponent, canActivate: [authGuard] },
    { path: 'schools/create', title: 'New School | SmartSchool', component: SchoolsComponent, canActivate: [authGuard], data: { isCreate: true } },
    { path: 'schools/:id', title: 'School Details | SmartSchool', component: SchoolDetailsComponent, canActivate: [authGuard] },
    { path: 'schools/:id/edit', title: 'Edit School | SmartSchool', component: SchoolDetailsComponent, canActivate: [authGuard], data: { isEdit: true } },
    { path: 'schools/:id/student-enrollment-requests', title: 'School Student Enrollment Requests | SmartSchool', component: SchoolStudentEnrollmentRequestsComponent, canActivate: [authGuard] },
    { path: 'schools/:id/student-enrollment-requests/:id', title: 'School Student Enrollment Request Details | SmartSchool', component: SchoolStudentEnrollmentRequestDetailsComponent, canActivate: [authGuard] },
    { path: 'schools/:id/student-enrollments', title: 'School Student Enrollments | SmartSchool', component: SchoolStudentEnrollmentsComponent, canActivate: [authGuard] },
    { path: 'schools/:id/student-enrollments/:id', title: 'School Student Enrollment Details | SmartSchool', component: SchoolStudentEnrollmentDetailsComponent, canActivate: [authGuard] },
    { path: 'schools/:id/teacher-enrollment-requests', title: 'School Teacher Enrollment Requests | SmartSchool', component: SchoolTeacherEnrollmentRequestsComponent, canActivate: [authGuard] },
    { path: 'schools/:id/teacher-enrollment-requests/:id', title: 'School Teacher Enrollment Request Details | SmartSchool', component: SchoolTeacherEnrollmentRequestDetailsComponent, canActivate: [authGuard] },
    { path: 'schools/:id/teacher-enrollments', title: 'School Teacher Enrollments | SmartSchool', component: SchoolTeacherEnrollmentsComponent, canActivate: [authGuard] },
    { path: 'schools/:id/teacher-enrollments/:id', title: 'School Teacher Enrollment Details | SmartSchool', component: SchoolTeacherEnrollmentDetailsComponent, canActivate: [authGuard] },
    { path: 'schools/:id/classes', title: 'School Classes | SmartSchool', component: ClassDetailsComponent, canActivate: [authGuard] },
    { path: 'schools/:schoolId/classes/:grade/:section', title: 'Class Details | SmartSchool', component: ClassDetailsComponent, canActivate: [authGuard] },
    { path: 'schools/:schoolId/classes/:grade/:section/student-enrollments', title: 'Class Student Enrollments | SmartSchool', component: ClassStudentEnrollmentsComponent, canActivate: [authGuard] },
    { path: 'schools/:schoolId/classes/:grade/:section/teacher-enrollments', title: 'Class Teacher Enrollments | SmartSchool', component: ClassTeacherEnrollmentsComponent, canActivate: [authGuard] },

    //students
    { path: 'students', title: 'Students | SmartSchool', component: StudentsComponent, canActivate: [authGuard] },
    { path: 'students/create', title: 'New Student | SmartSchool', component: StudentsComponent, canActivate: [authGuard], data: { isCreate: true } },
    { path: 'students/:id', title: 'Student Details | SmartSchool', component: StudentDetailsComponent, canActivate: [authGuard] },
    { path: 'students/:id/edit', title: 'Edit Student | SmartSchool', component: StudentDetailsComponent, canActivate: [authGuard], data: { isEdit: true } },

    //teachers
    { path: 'teachers', title: 'Teachers | SmartSchool', component: TeachersComponent, canActivate: [authGuard] },
    { path: 'teachers/create', title: 'New Teacher | SmartSchool', component: TeachersComponent, canActivate: [authGuard], data: { isCreate: true } },
    { path: 'teachers/:id', title: 'Teacher Details | SmartSchool', component: TeacherDetailsComponent, canActivate: [authGuard] },
    { path: 'teachers/:id/edit', title: 'Edit Teacher | SmartSchool', component: TeacherDetailsComponent, canActivate: [authGuard], data: { isEdit: true } },


    //Wild Card Route for 404 request 
    { path: '**', pathMatch: 'full',   title: '404 | SmartSchool', component: NotFoundComponent },
];
