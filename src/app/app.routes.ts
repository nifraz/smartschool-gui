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

export const routes: Routes = [
    //main
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        title: 'Dashboard | SmartSchool',
        component: DashboardComponent,
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: 'login', title: 'Login | SmartSchool', component: LoginComponent, canActivate: [accountGuard] },
            { path: 'register', title: 'Register | SmartSchool', component: RegisterComponent, canActivate: [accountGuard] },
        ],
    },

    //schools
    {
        path: 'schools',
        title: 'Schools | SmartSchool',
        component: SchoolsComponent,
        canActivate: [authGuard]
    },
    { path: 'schools/create', title: 'New School | SmartSchool', component: SchoolsComponent, data: { isCreate: true } },
    {
        path: 'schools/:id',
        title: 'School Details | SmartSchool',
        component: SchoolDetailsComponent,
        canActivate: [authGuard]
    },
    { path: 'schools/:id/edit', title: 'Edit School | SmartSchool', component: SchoolDetailsComponent, data: { isEdit: true } },

    //students
    {
        path: 'students',
        title: 'Students | SmartSchool',
        component: StudentsComponent,
        canActivate: [authGuard]
    },
    { path: 'students/create', title: 'New Student | SmartSchool', component: StudentsComponent, data: { isCreate: true } },
    {
        path: 'students/:id',
        title: 'Student Details | SmartSchool',
        component: StudentDetailsComponent,
        canActivate: [authGuard]
    },
    { path: 'students/:id/edit', title: 'Edit Student | SmartSchool', component: StudentDetailsComponent, data: { isEdit: true } },

    //teachers
    {
        path: 'teachers',
        title: 'Teachers | SmartSchool',
        component: TeachersComponent,
        canActivate: [authGuard]
    },
    { path: 'teachers/create', title: 'New Teacher | SmartSchool', component: TeachersComponent, data: { isCreate: true } },
    {
        path: 'teachers/:id',
        title: 'Teacher Details | SmartSchool',
        component: TeacherDetailsComponent,
        canActivate: [authGuard]
    },
    { path: 'teachers/:id/edit', title: 'Edit Teacher | SmartSchool', component: TeacherDetailsComponent, data: { isEdit: true } },


    //Wild Card Route for 404 request 
    {
        path: '**', pathMatch: 'full',  
        title: '404 | SmartSchool',
        component: NotFoundComponent 
    },
];
