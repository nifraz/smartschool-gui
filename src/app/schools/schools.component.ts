import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../shared/graphql-record-form/graphql-record-form.component';
import { GraphqlService } from '../shared/services/graphql.service';
import { Sex, SchoolModel, SchoolType, SchoolInput } from '../../../graphql/generated';
import { MultiSelectFilterComponent } from '../shared/components/multi-select-filter/multi-select-filter.component';
import { CustomFloatingFilterComponent } from '../shared/components/custom-floating-filter/custom-floating-filter.component';
import { SchoolsService } from './schools.service';
import { BaseComponent } from '../shared/components/base/base.component';
import { GraphqlCollections, GraphqlTypes } from '../shared/enums';
import { GridComponent } from '../shared/components/grid/grid.component';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [
    GraphqlDataGridComponent
  ],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss'
})
export class SchoolsComponent extends GridComponent<SchoolModel> implements OnInit {
  override loadData(): void {
    throw new Error('Method not implemented.');
  }
  collectionKey: string = GraphqlCollections.SCHOOLS;

  constructor(
    private schoolsService: SchoolsService,
    private graphqlService: GraphqlService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
    super();
  }

  onRecordClicked($event: SchoolModel) {
    this.router.navigate([ 'schools', $event.id ]);
  }

  onNewClicked() {
    // const getDivisions$ = this.graphqlService.getGqlQueryObservable(GET_ACADEMIC_YEARS).pipe(
    //   map((res: GraphqlCollectionResponse<AcademicYearModel>) => {
    //       return res.data['academicYears'].items
    //         .filter(x => x.year && x.year >= new Date().getFullYear())
    //         .map((x: AcademicYearModel) => ({ value: x.year, label: x.year }));
    //   })
    // );

    // const fields = [
    //   {
    //     fieldGroupClassName: 'row',
    //     fieldGroup: [
    //       {
    //         className: 'col-12 col-md-12',
    //         key: 'personId',
    //         type: 'select',
    //         props: {
    //           label: 'Candidate',
    //           type: 'select',
    //           placeholder: 'Select Candidate',
    //           options: [
    //             {
    //               value: this.authService.loggedInUser?.person?.id,
    //               label: `${this.authService.loggedInUser?.person?.fullName} (${this.authService.loggedInUser?.person?.age?.shortString})`
    //             }
    //           ],
    //           required: true,
    //           disabled: true,
    //         },
    //       },
    //       {
    //         className: 'col-12 col-md-12',
    //         key: 'schoolId',
    //         type: 'select',
    //         props: {
    //           label: 'School',
    //           type: 'select',
    //           placeholder: 'Select School',
    //           options: [
    //             {
    //               value: this.record?.id,
    //               label: `${this.record?.name} (${this.record?.address})`
    //             }
    //           ],
    //           required: true,
    //           disabled: true,
    //         },
    //       },
    //       {
    //         className: 'col-12 col-md-6',
    //         key: 'academicYearYear',
    //         type: 'select',
    //         props: {
    //           label: 'Academic Year',
    //           type: 'select',
    //           placeholder: 'Select Academic Year',
    //           options: getAcademicYears$,
    //           required: true,
    //         },
    //         validators: {
    //           validation: [(x: AbstractControl) => x && x.value ? null : { 'academicYearYear': true }],
    //         },
    //       },
    //       {
    //         className: 'col-12 col-md-6',
    //         key: 'grade',
    //         type: 'select',
    //         props: {
    //           label: 'Grade',
    //           type: 'select',
    //           placeholder: 'Select Grade',
    //           options: enumToArray(Grade).map(x => ({ label: x.caption, value: x.value })),
    //           // options: getGradesBySchool$,
    //           required: true,
    //         },
    //         validators: {
    //           validation: [(x: AbstractControl) => x && x.value && x.value != 'NONE' ? null : { 'grade': true }],
    //         },
    //       },
          
    //     ],
    //   },
    //   // {
    //   //   className: 'section-label',
    //   //   template: '<hr /><div><strong>Address:</strong></div>',
    //   // },
  
    // ];

    // const model: SchoolStudentEnrollmentRequestInput = {
    //   schoolId: this.record?.id,
    //   personId: this.authService.loggedInUser?.person?.id,
    //   academicYearYear: new Date().getFullYear(),
    //   grade: Grade.Grade1,
    // };

    // const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<SchoolStudentEnrollmentRequestModel, SchoolStudentEnrollmentRequestInput>, {
    //   width: '1200px',
    //   data: {
    //     title: 'School Student Enrollment Request',
    //     type: 'SchoolStudentEnrollment',
    //     model,
    //     fields,
    //     recordCreateMutation: CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST,
    //   }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   // this.router.navigate(['/teachers', this.id]);
    //   this.loadData();
    //   //reload data
    //   console.log(result);
    // });

    // this.navigateToCreateRecord();
  }

  ngOnInit(): void {
    console.log('schools');
    this.activatedRoute.data.subscribe(data => {
      if (data['isCreate']) {
        this.openCreateModal();
      }
    });
  }

  openCreateModal(): void {
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<SchoolInput>, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.SCHOOLS,
        type: GraphqlTypes.SCHOOL,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      //reload data
      this.router.navigate(['/schools']);
      console.log(result);
    });
  }
  
  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<SchoolModel>[] = [
    { 
      field: "id",
      headerName: "ID",
      filter: "agNumberColumnFilter",
      hide: false,
     },
    { 
      field: "censusNo",
      headerName: "Census No",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "name",
      headerName: "Name",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "address",
      headerName: "Address",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "email",
      headerName: "Email",
      filter: "agDateColumnFilter",
    },
    { 
      field: "phoneNo",
      headerName: "Phone No",
      filter: "agDateColumnFilter",
    },
    { 
      field: "type",
      headerName: "Type",
      filter: MultiSelectFilterComponent, 
      filterParams: { 
        values: Object.values(SchoolType) 
      },
      floatingFilterComponent: CustomFloatingFilterComponent,
    },
    
  ];

  // colDefs: ColDef<School>[] = generateColDefs<School>();

  
}
