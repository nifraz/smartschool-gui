import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../../shared/graphql-record-form/graphql-record-form.component';
import { GraphqlService } from '../../shared/services/graphql.service';
import { Grade, RequestStatus, SchoolStudentEnrollmentRequestModel, Sex, TeacherModel } from '../../../../graphql/generated';
import { MultiSelectFilterComponent } from '../../shared/components/multi-select-filter/multi-select-filter.component';
import { CustomFloatingFilterComponent } from '../../shared/components/custom-floating-filter/custom-floating-filter.component';
import { AgGridFilterType, GraphqlCollections, GraphqlTypes } from '../../shared/enums';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { GraphqlDataGridComponent } from '../../shared/graphql-data-grid/graphql-data-grid.component';
import { AgGridFilter } from '../../shared/models';

@Component({
  selector: 'app-user-school-student-enrollment-requests',
  standalone: true,
  imports: [
    GraphqlDataGridComponent
  ],
  templateUrl: './user-school-student-enrollment-requests.component.html',
  styleUrl: './user-school-student-enrollment-requests.component.scss'
})
export class UserSchoolStudentEnrollmentRequestsComponent extends GridComponent<SchoolStudentEnrollmentRequestModel> implements OnInit {
  override loadData(): void {
    throw new Error('Method not implemented.');
  }
  collectionKey: string = GraphqlCollections.SCHOOL_STUDENT_ENROLLMENT_REQUESTS;
  initialFilterModel?: {[key: string]: AgGridFilter};

  constructor(
    private graphqlService: GraphqlService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
    super();
  }

  userId?: string | null;

  onRecordClicked($event: SchoolStudentEnrollmentRequestModel) {
    this.router.navigate(['/users', this.userId, 'school-student-enrollment-requests', $event.id]);
  }

  onNewClicked() {
    this.navigateToCreateRecord();
  }

  ngOnInit(): void {
    console.log('teachers');
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    if(this.userId) {
      this.initialFilterModel = {
        createdUserId: {
          filterType: AgGridFilterType.NUMBER,
          type: "equals",
          filter: this.userId
        }
      };
    }
    this.activatedRoute.data.subscribe(data => {
      if (data['isCreate']) {
        this.openCreateModal();
      }
    });
  }

  openCreateModal(): void {
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<SchoolStudentEnrollmentRequestModel, any>, {
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
  colDefs: ColDef<SchoolStudentEnrollmentRequestModel>[] = [
    { 
      field: "id",
      headerName: "ID",
      filter: "agNumberColumnFilter",
      hide: false,
     },
    { 
      field: "grade",
      headerName: "Grade",
      filter: MultiSelectFilterComponent, 
      filterParams: { 
        values: Object.values(Grade) 
      },
      floatingFilterComponent: CustomFloatingFilterComponent,
    },
    { 
      field: "schoolName",
      headerName: "School",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "personFullName",
      headerName: "Candidate",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "academicYearYear",
      headerName: "Academic Year",
      filter: "agNumberColumnFilter",
    },
    { 
      field: "status",
      headerName: "Status",
      filter: MultiSelectFilterComponent, 
      filterParams: { 
        values: Object.values(RequestStatus) 
      },
      floatingFilterComponent: CustomFloatingFilterComponent,
    },
    { 
      field: "reason",
      headerName: "Reason",
      filter: 'agTextColumnFilter',
    },
  ];

  
}
