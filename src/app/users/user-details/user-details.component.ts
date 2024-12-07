import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../shared/not-found/not-found.component";
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../../shared/graphql-record-form/graphql-record-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { enumToArray, GraphqlCollectionResponse, GraphqlService } from '../../shared/services/graphql.service';
import { AcademicYearModel, ClassModel, EnrollmentStatus, Grade, PersonInput, PersonModel, RequestStatus, SchoolModel, SchoolStudentEnrollmentInput, SchoolStudentEnrollmentModel, SchoolStudentEnrollmentRequestInput, SchoolStudentEnrollmentRequestModel, Sex, StudentInput, StudentModel, UserModel } from '../../../../graphql/generated';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../shared/components/base/base.component';
import { GET_ACADEMIC_YEARS, GET_CLASSES_BY_SCHOOL, GET_PERSONS_CREATED_BY_USER, GET_SCHOOLS_FILTERED_BY_NAME, GET_STUDENT, GET_USER } from '../../shared/queries';
import { AuthService } from '../../auth/auth.service';
import { RecordComponent } from '../../shared/components/record/record.component';
import { TitleCaseWithSpacePipe } from "../../shared/pipes/title-case-with-space.pipe";
import { GraphqlTypes, GraphqlCollections } from '../../shared/enums';
import { AbstractControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { groupByToArrays } from '../../shared/functions';
import { CREATE_PERSON, CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST } from '../../shared/mutations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    NotFoundComponent,
    MatProgressBarModule,
    RouterLink,
    TitleCaseWithSpacePipe,
  ],
  providers: [
    TitleCaseWithSpacePipe
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent extends RecordComponent<UserModel> implements OnInit {
  RequestStatus = RequestStatus;

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
    this.id = this.activatedRoute.snapshot.paramMap.get('userId');
    this.loadData();

    this.activatedRoute.data.subscribe(data => {
      if (data['isEdit']) {
        this.openRecordFormModal();
      }
    });
  }

  override loadData(): void {
    if (this.id) {
      this.isLoading = true;
      const variables = {
        id: +this.id,
      }
      this.graphqlService.getGqlQueryObservable(GET_USER, variables).subscribe({
        next: res => {
          this.isLoading = false;
          this.record = res.data[GraphqlTypes.USER];
        },
        error: err => {
          this.isLoading = false;
          console.error(err);
        }
      })
    }
  }
  
  openRecordFormModal(): void {
    const inputDefs = {};
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.USERS,
        type: GraphqlTypes.USER,
        inputDefs,
        id: this.id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/users', this.id]);
      //reload data
      console.log(result);
    });
  }
  
  editRecord() {
    this.router.navigate(['/users', this.id, 'edit']);
    // this.openRecordFormModal();
  }

  deleteRecord() {
    this.toastr.error(`Could not delete`, 'Record');
  }

  createSchoolStudentEnrollmentRequest() {
    // const userAge = this.authService.loggedInUser?.person.age?.years;
    // if (userAge && userAge >= 21) {
    //   this.toastr.warning(`Sorry You cannot request for School Student Enrollment after 21 years. Your current age is ${userAge}.`);
    //   return;
    // }
    
    // this.model = model;
    const getAcademicYears$ = this.graphqlService.getGqlQueryObservable(GET_ACADEMIC_YEARS).pipe(
      map((res: GraphqlCollectionResponse<AcademicYearModel>) => {
          return res.data['academicYears'].items
            .filter(x => x.year && x.year >= new Date().getFullYear())
            .map((x: AcademicYearModel) => ({ value: x.year, label: x.year }));
      })
    );

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

    const getGradesBySchool$ = this.graphqlService.getGqlQueryObservable(GET_CLASSES_BY_SCHOOL, { schoolId: this.record?.id }).pipe(
      map((res: GraphqlCollectionResponse<ClassModel>) => {
          return groupByToArrays(res.data['classes'].items, 'grade').map((x: ClassModel[]) => ({ value: x[0].grade, label: `${this.titleCaseWithSpacePipe.transform(x[0].grade)}` }));
      })
    );

    const getSchoolsFilteredByName$ = (filter: string) => this.graphqlService.getGqlQueryObservable(GET_SCHOOLS_FILTERED_BY_NAME, { filter }).pipe(
      debounceTime(300),
      map((res: GraphqlCollectionResponse<SchoolModel>) => {
        return res.data[GraphqlCollections.SCHOOLS].items
        .map((x: SchoolModel) => ({ value: x.id, label: `${x.label}` }));
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
            type: 'autocomplete',
            props: {
              label: 'School',
              type: 'autocomplete',
              placeholder: 'Enter School',
              filter: (search: string) => getSchoolsFilteredByName$(search),
              required: true,
            },
            validators: {
              validation: [(x: AbstractControl) => x && x.value && x.value.value ? null : { 'schoolId': true }],
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
      schoolId: 0,
      personId: this.authService.loggedInUser?.person?.id,
      academicYearYear: new Date().getFullYear(),
      grade: Grade.Grade1,
    };

    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<SchoolStudentEnrollmentRequestInput>, {
      width: '1200px',
      data: {
        title: 'School Student Enrollment Request',
        type: 'SchoolStudentEnrollmentRequest',
        model,
        fields,
        recordCreateMutation: CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  createCandidate(): void {

    const fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-12 col-md-6',
            key: 'fullName',
            type: 'input',
            props: {
              label: 'Full Name',
              type: 'text',
              placeholder: 'Enter Full Name',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'shortName',
            type: 'input',
            props: {
              label: 'Short Name',
              type: 'text',
              placeholder: 'Enter Short Name',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'dateOfBirth',
            type: 'datepicker',
            props: {
              label: 'Date of Birth',
              type: 'datepicker',
              placeholder: 'Enter Date of Birth',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'sex',
            type: 'select',
            props: {
              label: 'Sex',
              type: 'select',
              placeholder: 'Select Sex',
              options: enumToArray(Sex).map(x => ({ label: x.caption, value: x.value })),
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'address',
            type: 'input',
            props: {
              label: 'address',
              type: 'textarea',
              placeholder: 'Enter Address',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'mobileNo',
            type: 'input',
            props: {
              label: 'Mobile No',
              type: 'phone',
              placeholder: 'Enter Mobile No',
              required: false,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'bcNo',
            type: 'input',
            props: {
              label: 'Birth Certificate No',
              type: 'text',
              placeholder: 'Enter Birth Certificate No',
              required: false,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'nicNo',
            type: 'input',
            props: {
              label: 'National Identity Card No',
              type: 'text',
              placeholder: 'Enter National Identity Card No',
              required: false,
            },
          },
        ],
      },
      // {
      //   className: 'section-label',
      //   template: '<hr /><div><strong>Address:</strong></div>',
      // },
  
    ];

    const model: PersonInput = {
      fullName: '',
      shortName: '',
      dateOfBirth: '',
      sex: Sex.Male,
      address: '',
      mobileNo: '',
      bcNo: '',
      nicNo: '',
    };

    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<PersonInput>, {
      width: '1200px',
      data: {
        title: 'Student Candidate',
        type: 'PersonModel',
        model,
        fields,
        recordCreateMutation: CREATE_PERSON,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

}
