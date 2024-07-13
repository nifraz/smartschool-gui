import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { StudentsService, Student } from './students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from './student-form/student-form.component';

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
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
    
  }

  onRecordClicked($event: Student) {
    this.router.navigate(['/students', $event.id]);
    // this.router.navigateByUrl('/students/1');
  }

  ngOnInit(): void {
    console.log('students');
    this.activatedRoute.data.subscribe(data => {
      if (data['isCreate']) {
        this.openStudentFormModal();
      }
    });
  }

  openStudentFormModal(): void {
    const dialogRef = this.matDialog.open(StudentFormComponent, {
      width: '1000px',
      data: { isEdit: false },
    });

    dialogRef.afterClosed().subscribe(result => {
      //reload data
      this.router.navigate(['/students']);
      console.log(result);
    });
  }

  navigateToCreateStudent(): void {
    this.router.navigate(['create'], { relativeTo: this.activatedRoute });
  }

  navigateToEditStudent(id: string): void {
    this.router.navigate([id, 'edit'], { relativeTo: this.activatedRoute });
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