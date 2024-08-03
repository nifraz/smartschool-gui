import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { StudentsService } from './students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../shared/graphql-record-form/graphql-record-form.component';
import { GraphqlCollections, GraphqlService, GraphqlTypes } from '../shared/services/graphql.service';
import { SexType, StudentType } from '../../../graphql/generated';
import { MultiSelectFilterComponent } from '../shared/components/multi-select-filter/multi-select-filter.component';
import { CustomFloatingFilterComponent } from '../shared/components/custom-floating-filter/custom-floating-filter.component';

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
    private graphqlService: GraphqlService,
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
    const inputDefs = this.studentsService.getStudentInputDefs();
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.STUDENTS,
        type: GraphqlTypes.STUDENT,
        inputDefs,
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
      headerName: "ID",
      filter: "agNumberColumnFilter",
      hide: false,
     },
    { 
      field: "fullName",
      headerName: "Full Name",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "shortName",
      headerName: "Short Name",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "nickname",
      headerName: "Nickname",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "dateOfBirth",
      headerName: "Date of Birth",
      filter: "agDateColumnFilter",
    },
    { 
      field: "sex",
      headerName: "Sex",
      filter: MultiSelectFilterComponent, 
      filterParams: { 
        values: Object.values(SexType) 
      },
      floatingFilterComponent: CustomFloatingFilterComponent,
    },
    { 
      field: "bcNo",
      headerName: "BC No",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "nicNo",
      headerName: "NIC No",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "contactNo",
      headerName: "Contact No",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "email",
      headerName: "Email",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "address",
      headerName: "Address",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "passportNo",
      headerName: "Passport No",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "createdOn",
      headerName: "Created On",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "createdBy",
      headerName: "Created By",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "lastModifiedOn",
      headerName: "Last Modified On",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "lastModifiedBy",
      headerName: "Last Modified By",
      filter: 'agTextColumnFilter',
    },
  ];

  // colDefs: ColDef<Student>[] = generateColDefs<Student>();

  
}