import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { StudentsService, Student } from './students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    GraphqlDataGridComponent
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {

  constructor(
    private StudentsService: StudentsService,
    private router: Router,
  ) {
    
  }

  onRecordClicked($event: Student) {
    this.router.navigate(['/students', $event.id]);
    // this.router.navigateByUrl('/students/1');
  }

  ngOnInit(): void {
    console.log('students');
  }
  
  themeClass = "ag-theme-quartz";

  // Row Data: The data to be displayed.
  rowData: Student[] = this.StudentsService.getStudents();

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<Student>[] = [
    { 
      field: "id",
      hide: true,
     },
    { 
      field: "studentId",
      pinned: true,
    },
    { field: "fullName" },
    { field: "nickName" },
    { field: "dateOfBirth" },
    { field: "mobileNo" },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  }
}