import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../shared/not-found/not-found.component";
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../../shared/graphql-record-form/graphql-record-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { enumToArray, GraphqlCollectionResponse, GraphqlService } from '../../shared/services/graphql.service';
import { AcademicYearModel, ClassModel, EnrollmentStatus, Grade, PersonModel, RequestStatus, SchoolModel, SchoolStudentEnrollmentInput, SchoolStudentEnrollmentModel, SchoolStudentEnrollmentRequestInput, SchoolStudentEnrollmentRequestModel, StudentInput, StudentModel } from '../../../../graphql/generated';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../shared/components/base/base.component';
import { GET_ACADEMIC_YEARS, GET_CLASSES_BY_SCHOOL, GET_PERSONS_CREATED_BY_USER, GET_SCHOOL, GET_STUDENT } from '../../shared/queries';
import { AuthService } from '../../auth/auth.service';
import { RecordComponent } from '../../shared/components/record/record.component';
import { AddSpacesPipe } from "../../shared/pipes/add-spaces.pipe";
import { TitleCaseWithSpacePipe } from "../../shared/pipes/title-case-with-space.pipe";
import { groupBy, groupByToArrays } from '../../shared/functions';
import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs';
import { GraphqlCollections, GraphqlTypes } from '../../shared/enums';
import { CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST } from '../../shared/mutations';
import { SchoolReportComponent } from '../school-report/school-report.component';

@Component({
  selector: 'app-school-details',
  standalone: true,
  imports: [
    CommonModule,
    NotFoundComponent,
    MatProgressBarModule,
    RouterLink,
    AddSpacesPipe,
    TitleCaseWithSpacePipe
  ],
  providers: [TitleCaseWithSpacePipe],
  templateUrl: './school-details.component.html',
  styleUrl: './school-details.component.scss'
})
export class SchoolDetailsComponent extends RecordComponent<SchoolModel> implements OnInit {
  EnrollmentStatus = EnrollmentStatus;
  RequestStatus = RequestStatus;
  groupByToArrays = groupByToArrays;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog,
    private graphqlService: GraphqlService,
    private toastr: ToastrService,
    public authService: AuthService,
    private titleCaseWithSpacePipe: TitleCaseWithSpacePipe,
  ) {
    // this.activatedRoute.params.subscribe(params => {
    //   this.id = params['id'];
    // });
    super();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('schoolId');
    this.loadData();

    this.activatedRoute.data.subscribe(data => {
      if (data['isEdit']) {
        this.openRecordFormModal();
      }
    });
  }

  loadData(): void {
    if (this.id) {
      this.isLoading = true;
      const variables = {
        id: +this.id,
      }
      this.graphqlService.getGqlQueryObservable(GET_SCHOOL, variables).subscribe({
        next: res => {
          this.isLoading = false;
          this.record = res.data[GraphqlTypes.SCHOOL];
        },
        error: err => {
          this.isLoading = false;
          console.error(err);
        }
      });
    }
  }

  openRecordFormModal(): void {
    const inputDefs = {};
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.SCHOOLS,
        type: GraphqlTypes.SCHOOL,
        inputDefs,
        id: this.id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/schools', this.id]);
      //reload data
      console.log(result);
    });
  }
  
  editRecord() {
    this.router.navigate(['/schools', this.id, 'edit']);
    // this.openRecordFormModal();
  }

  viewReport() {
    const inputDefs = {};
    const dialogRef = this.matDialog.open(SchoolReportComponent, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.SCHOOLS,
        type: GraphqlTypes.SCHOOL,
        inputDefs,
        id: this.id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/schools', this.id]);
      //reload data
      console.log(result);
    });
  }

  deleteRecord() {
    this.toastr.error(`Could not delete`, 'Record');
  }

  createClass() {

  }

  createSchoolStudentEnrollmentRequest() {
    // const userAge = this.authService.loggedInUser?.person.age?.years;
    // if (userAge && userAge >= 21) {
    //   this.toastr.warning(`Sorry You cannot request for School Student Enrollment after 21 years. Your current age is ${userAge}.`);
    //   return;
    // }
    
    const getPersonsCreatedByUser$ = this.graphqlService.getGqlQueryObservable(GET_PERSONS_CREATED_BY_USER, { filter: this.authService.loggedInUser?.id }).pipe(
      map((res: GraphqlCollectionResponse<PersonModel>) => {
        const items = res.data[GraphqlCollections.PERSONS].items;
        if (this.authService.loggedInUser && this.authService.loggedInUser.person) {
          items.unshift(this.authService.loggedInUser.person);
        }
        return items
          .map((x: PersonModel) => ({ value: x.id, label: `${x.label}` }));
      })
    );
    
    const getAcademicYears$ = this.graphqlService.getGqlQueryObservable(GET_ACADEMIC_YEARS).pipe(
      map((res: GraphqlCollectionResponse<AcademicYearModel>) => {
          return res.data['academicYears'].items
            .filter(x => x.year && x.year >= new Date().getFullYear())
            .map((x: AcademicYearModel) => ({ value: x.year, label: x.year }));
      })
    );

    const getGradesBySchool$ = this.graphqlService.getGqlQueryObservable(GET_CLASSES_BY_SCHOOL, { schoolId: this.record?.id }).pipe(
      map((res: GraphqlCollectionResponse<ClassModel>) => {
          return groupByToArrays(res.data['classes'].items, 'grade').map((x: ClassModel[]) => ({ value: x[0].grade, label: `${this.titleCaseWithSpacePipe.transform(x[0].grade)}` }));
      })
    );

    const fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-12 col-md-12',
            key: 'personId',
            type: 'select',
            props: {
              label: 'Candidate',
              type: 'select',
              placeholder: 'Select Candidate',
              options: getPersonsCreatedByUser$,
              required: true,
            },
          },
          {
            className: 'col-12 col-md-12',
            key: 'schoolId',
            type: 'select',
            props: {
              label: 'School',
              type: 'select',
              placeholder: 'Select School',
              options: [
                {
                  value: this.record?.id,
                  label: `${this.record?.label}`
                }
              ],
              required: true,
              disabled: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'academicYearYear',
            type: 'select',
            props: {
              label: 'Academic Year',
              type: 'select',
              placeholder: 'Select Academic Year',
              options: getAcademicYears$,
              required: true,
            },
            validators: {
              validation: [(x: AbstractControl) => x && x.value ? null : { 'academicYearYear': true }],
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'grade',
            type: 'select',
            props: {
              label: 'Grade',
              type: 'select',
              placeholder: 'Select Grade',
              options: enumToArray(Grade).map(x => ({ label: x.caption, value: x.value })),
              // options: getGradesBySchool$,
              required: true,
            },
            validators: {
              validation: [(x: AbstractControl) => x && x.value && x.value != 'NONE' ? null : { 'grade': true }],
            },
          },
          
        ],
      },
      // {
      //   className: 'section-label',
      //   template: '<hr /><div><strong>Address:</strong></div>',
      // },
  
    ];

    const model: SchoolStudentEnrollmentRequestInput = {
      schoolId: this.record?.id,
      personId: this.authService.loggedInUser?.person?.id,
      academicYearYear: new Date().getFullYear(),
      grade: Grade.Grade1,
    };

    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<SchoolStudentEnrollmentRequestInput>, {
      width: '1200px',
      data: {
        title: 'School Student Enrollment Request',
        type: 'SchoolStudentEnrollment',
        model,
        fields,
        recordCreateMutation: CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.router.navigate(['/teachers', this.id]);
      this.loadData();
      //reload data
      console.log(result);
    });
  }

}
