import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../shared/graphql-record-form/graphql-record-form.component';
import { GraphqlService } from '../shared/services/graphql.service';
import { Sex, TeacherInput, TeacherModel } from '../../../graphql/generated';
import { MultiSelectFilterComponent } from '../shared/components/multi-select-filter/multi-select-filter.component';
import { CustomFloatingFilterComponent } from '../shared/components/custom-floating-filter/custom-floating-filter.component';
import { BaseComponent } from '../shared/components/base/base.component';
import { TeachersService } from './teachers.service';
import { GraphqlCollections, GraphqlTypes } from '../shared/enums';
import { GridComponent } from '../shared/components/grid/grid.component';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [
    GraphqlDataGridComponent
  ],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent extends GridComponent<TeacherModel> implements OnInit {
  override loadData(): void {
    throw new Error('Method not implemented.');
  }
  collectionKey: string = GraphqlCollections.TEACHERS;

  constructor(
    private teachersService: TeachersService,
    private graphqlService: GraphqlService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
    super();
  }

  onRecordClicked($event: TeacherModel) {
    this.router.navigate(['/teachers', $event.id]);
  }

  onNewClicked() {
    this.navigateToCreateRecord();
  }

  ngOnInit(): void {
    console.log('teachers');
    this.activatedRoute.data.subscribe(data => {
      if (data['isCreate']) {
        this.openCreateModal();
      }
    });
  }

  openCreateModal(): void {
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<TeacherInput>, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.TEACHERS,
        type: GraphqlTypes.TEACHER,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      //reload data
      this.router.navigate(['/teachers']);
      console.log(result);
    });
  }

  navigateToCreateRecord(): void {
    this.router.navigate(['create'], { relativeTo: this.activatedRoute });
  }

  navigateToEditRecord(id: string): void {
    this.router.navigate([id, 'edit'], { relativeTo: this.activatedRoute });
  }

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<TeacherModel>[] = [
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

  // colDefs: ColDef<Teacher>[] = generateColDefs<Teacher>();

  
}
