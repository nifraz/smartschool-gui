import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { ErrorAlertComponent } from '../../../shared/components/error-alert/error-alert.component';
import { UserRegisterRequest, Sex, FormlyOption } from '../../../shared/models';
import { enumToArray, GraphqlCollectionResponse, GraphqlService, toDateOnlyString } from '../../../shared/services/graphql.service';
import { AcademicYearModel, ClassModel, Grade, PersonModel, SchoolModel, SchoolStudentEnrollmentRequestInput } from '../../../../../graphql/generated';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../../../shared/graphql-record-form/graphql-record-form.component';
import { CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST } from '../../../shared/mutations';
import { FormComponent } from '../../../shared/components/form/form.component';
import { map, Observable } from 'rxjs';
import { GET_ACADEMIC_YEARS, GET_CLASSES_BY_SCHOOL } from '../../../shared/queries';
import { TitleCaseWithSpacePipe } from '../../../shared/pipes/title-case-with-space.pipe';
import { groupByToArrays } from '../../../shared/functions';

@Component({
  selector: 'app-create-school-student-enrollment-request',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    ErrorAlertComponent,
    RouterLink,
    RouterLinkActive,
    MatProgressBarModule,
    FormlyMatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [TitleCaseWithSpacePipe],
  templateUrl: './create-school-student-enrollment-request.component.html',
  styleUrl: './create-school-student-enrollment-request.component.scss'
})
export class CreateSchoolStudentEnrollmentRequestComponent<SchoolStudentEnrollmentRequestModel> extends FormComponent<SchoolStudentEnrollmentRequestModel> implements OnInit {
  school?: SchoolModel;
  person?: PersonModel;

  getAcademicYears$?: Observable<FormlyOption[]>;
  getGradesBySchool$?: Observable<FormlyOption[]>;
  
  form = new FormGroup({});
  model: SchoolStudentEnrollmentRequestInput = {
    schoolId: 0,
    academicYearYear: new Date().getFullYear(),
    grade: Grade.None,
    personId: 0,
  };
  fields: FormlyFieldConfig[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private graphqlService: GraphqlService,
    private titleCaseWithSpacePipe: TitleCaseWithSpacePipe,
    private dialogRef: MatDialogRef<CreateSchoolStudentEnrollmentRequestComponent<SchoolStudentEnrollmentRequestModel>>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
    super();
    this.title = 'School Student Enrollment Request';
    this.school = this.data.school;
    this.person = this.data.person;

    this.model.schoolId = this.school?.id;
    this.model.personId = this.person?.id;
  }

  ngOnInit() {
    this.getAcademicYears$ = this.graphqlService.getGqlQueryObservable(GET_ACADEMIC_YEARS).pipe(
      map((res: GraphqlCollectionResponse<AcademicYearModel>) => {
          return res.data['academicYears'].items
            .filter(x => x.year && x.year >= new Date().getFullYear())
            .map((x: AcademicYearModel) => ({ value: x.year, label: x.year }));
      })
    );

    this.getGradesBySchool$ = this.graphqlService.getGqlQueryObservable(GET_CLASSES_BY_SCHOOL, { schoolId: this.school?.id }).pipe(
      map((res: GraphqlCollectionResponse<ClassModel>) => {
          return groupByToArrays(res.data['classes'].items, 'grade').map((x: ClassModel[]) => ({ value: x[0].grade, label: `${this.titleCaseWithSpacePipe.transform(x[0].grade)}` }))
      })
    );

    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-12 col-md-6',
            key: 'academicYearYear',
            type: 'select',
            props: {
              label: 'Academic Year',
              type: 'select',
              placeholder: 'Enter Academic Year',
              options: this.getAcademicYears$,
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
              placeholder: 'Enter Grade',
              // options: enumToArray(Grade).map(x => ({ label: x.caption, value: x.value })),
              options: this.getGradesBySchool$,
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
  }

  onSubmit() {
    if (this.form.invalid) {
      this.toastr.warning(`Invalid Data.`, this.title);
      return;
    }

    this.isLoading = true;
    this.error = null;

    const mutation = CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST;
    const variables = {
      input: this.model,
    };
    const refetchQueries: string[] = [];

    this.graphqlService.getGqlMutationObservable(mutation, variables, refetchQueries).subscribe({
      next: ({ data, errors, loading }) => {
        this.isLoading = false;
        if (errors) {
          this.error = errors;
          this.toastr.error(`Could not ${this.isEditMode ? 'update' : 'create'} record`, this.title);
        }
        if (data) {
          this.error = null;
          this.toastr.success(`Record ${this.isEditMode ? 'updated' : 'created'}`, this.title);
          // if (this.addAnother) {
          //   this.formGroup.reset();
          //   return;
          // }
          // this.oldRecord = input;
          this.closeModal();
        }
      },
      error: err => {
        this.isLoading = false;
        this.error = err;
        this.toastr.error(`Error occured`, this.title);
        console.log(err);
      }
    });
  }

  closeModal(): void {
    // const oldValue = JSON.stringify(this.oldRecord);
    // const newRecord = this.getFormattedInput(this.formGroup.value);
    // const newValue = JSON.stringify(newRecord);
    // if (oldValue != newValue) {
    //   if (!confirm("Are you sure you want to close without saving your changes?")) {
    //     return;
    //   }
    //   this.toastr.warning(`Changes were not saved`, this.typeName);
    // }
    this.dialogRef.close(this.model);
  }
}
