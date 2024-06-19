import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';

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
];
