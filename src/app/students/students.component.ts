import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { StudentsService } from './students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../shared/graphql-record-form/graphql-record-form.component';
import { GraphqlService } from '../shared/services/graphql.service';
import { Sex, StudentInput, StudentModel } from '../../../graphql/generated';
import { MultiSelectFilterComponent } from '../shared/components/multi-select-filter/multi-select-filter.component';
import { CustomFloatingFilterComponent } from '../shared/components/custom-floating-filter/custom-floating-filter.component';
import { BaseComponent } from '../shared/components/base/base.component';
import { GraphqlCollections, GraphqlTypes } from '../shared/enums';
import { GridComponent } from '../shared/components/grid/grid.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    GraphqlDataGridComponent
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent extends GridComponent<StudentModel> implements OnInit {

  collectionKey: string = GraphqlCollections.STUDENTS;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
    super();
  }

  override loadData(): void {
    throw new Error('Method not implemented.');
  }

  onRecordClicked(record: StudentModel) {
    this.router.navigate(['/students', record.id]);
    // this.router.navigateByUrl('/students/1');
  }

  onAddNewClicked() {
    this.navigateToCreateStudent();
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
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<StudentInput>, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.STUDENTS,
        type: GraphqlTypes.STUDENT,
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

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<StudentModel>[] = [
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
        values: Object.values(Sex) 
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
      field: "mobileNo",
      headerName: "Mobile No",
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
  ];

  // colDefs: ColDef<Student>[] = generateColDefs<Student>();

  
}