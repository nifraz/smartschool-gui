import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

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
    {
        path: 'students/:id',
        title: 'Student Details | SmartSchool',
        component: StudentDetailsComponent,
    },

    //Wild Card Route for 404 request 
    {
        path: '**', pathMatch: 'full',  
        title: '404 | SmartSchool',
        component: NotFoundComponent 
    },
];
