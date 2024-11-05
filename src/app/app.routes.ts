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

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: 'login', title: 'Login | SmartSchool', component: LoginComponent, canActivate: [accountGuard] },
            { path: 'register', title: 'Register | SmartSchool', component: RegisterComponent, canActivate: [accountGuard] },
        ],
    },
    {
        path: 'dashboard',
        title: 'Dashboard | SmartSchool',
        component: DashboardComponent,
    },
    {
        path: 'students',
        title: 'Students | SmartSchool',
        component: StudentsComponent,
        canActivate: [authGuard]
    },
    { path: 'students/create', title: 'New Student | SmartSchool', component: StudentsComponent, data: { isCreate: true } },
    { path: 'students/:id/edit', title: 'Edit Student | SmartSchool', component: StudentDetailsComponent, data: { isEdit: true } },
    {
        path: 'students/:id',
        title: 'Student Details | SmartSchool',
        component: StudentDetailsComponent,
    },
    // {
    //     path: 'students/:id/edit',
    //     title: 'Edit Student | SmartSchool',
    //     component: StudentFormComponent

    // },

    //Wild Card Route for 404 request 
    {
        path: '**', pathMatch: 'full',  
        title: '404 | SmartSchool',
        component: NotFoundComponent 
    },
];
