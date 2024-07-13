import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { StudentFormComponent } from './students/student-form/student-form.component';

export const routes: Routes = [
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
        path: 'students',
        title: 'Students | SmartSchool',
        component: StudentsComponent,
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
