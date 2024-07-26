import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { StudentsService } from './students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../shared/graphql-record-form/graphql-record-form.component';
import { GraphqlCollections, GraphqlTypes } from '../shared/services/graphql.service';
import { StudentType } from '../../../graphql/generated';

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
  collectionKey: string = GraphqlCollections.STUDENTS;

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
    
  }

  onRecordClicked($event: StudentType) {
    this.router.navigate(['/students', $event.id]);
    // this.router.navigateByUrl('/students/1');
  }

  ngOnInit(): void {
    console.log('students');
    this.activatedRoute.data.subscribe(data => {
      if (data['isCreate']) {
        this.openCreateModal();
      }
    });
  }

  openCreateModal(): void {
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.STUDENTS,
        type: GraphqlTypes.STUDENT,
        formGroup: this.studentsService.getStudentInputFormGroup(),
        controlMetadata: this.studentsService.getStudentControlMetadata(),
      },
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

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<StudentType>[] = [
    { 
      field: "id",
      filter: "agNumberColumnFilter",
      hide: false,
      floatingFilter: true,
     },
    { 
      field: "studentId",
      filter: 'agTextColumnFilter',
      pinned: true,
      floatingFilter: true,
    },
    { 
      field: "fullName",
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    },
    { 
      field: "nickName",
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    },
    { 
      field: "dateOfBirth",
      filter: "agDateColumnFilter",
      floatingFilter: true,
    },
    { 
      field: "mobileNo",
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    },
  ];

  // colDefs: ColDef<Student>[] = generateColDefs<Student>();

  
}