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
import { UserRegisterRequest, Sex } from '../../../shared/models';
import { enumToArray, GraphqlService, toDateOnlyString } from '../../../shared/services/graphql.service';
import { AcademicYearModel, ClassModel, Grade, PersonModel, SchoolModel, SchoolStudentEnrollmentInput, SchoolStudentEnrollmentRequestInput, SchoolStudentEnrollmentRequestModel } from '../../../../../graphql/generated';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../../../shared/graphql-record-form/graphql-record-form.component';
import { CREATE_SCHOOL_STUDENT_ENROLLMENT, CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST } from '../../../shared/mutations';
import { FormComponent } from '../../../shared/components/form/form.component';
import { map, Observable } from 'rxjs';
import { GET_ACADEMIC_YEARS, GET_CLASSES_BY_SCHOOL } from '../../../shared/queries';
import { TitleCaseWithSpacePipe } from "../../../shared/pipes/title-case-with-space.pipe";

@Component({
  selector: 'app-approve-school-student-enrollment',
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
    TitleCaseWithSpacePipe
  ],
  providers: [TitleCaseWithSpacePipe],
  templateUrl: './approve-school-student-enrollment.component.html',
  styleUrl: './approve-school-student-enrollment.component.scss'
})
export class ApproveSchoolStudentEnrollmentComponent<SchoolStudentEnrollmentModel> extends FormComponent<SchoolStudentEnrollmentModel> {
  schoolStudentEnrollmentRequest?: SchoolStudentEnrollmentRequestModel;

  getAcademicYears$?: Observable<any[]>;
  getClassesBySchool$?: Observable<any[]>;
  
  form = new FormGroup({});
  model: SchoolStudentEnrollmentInput = {
    schoolStudentEnrollmentRequestId: this.schoolStudentEnrollmentRequest?.id,
    schoolId: 0,
    academicYearYear: 0,
    classId: 0,
    personId: 0,
  };
  fields: FormlyFieldConfig[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private graphqlService: GraphqlService,
    private titleCaseWithSpacePipe: TitleCaseWithSpacePipe,
    private dialogRef: MatDialogRef<ApproveSchoolStudentEnrollmentComponent<SchoolStudentEnrollmentModel>>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
    super();
    this.title = 'School Student Enrollment';
    this.schoolStudentEnrollmentRequest = this.data.schoolStudentEnrollmentRequest;

    this.model.schoolStudentEnrollmentRequestId = this.schoolStudentEnrollmentRequest?.id;
    this.model.schoolId = this.schoolStudentEnrollmentRequest?.school?.id;
    this.model.personId = this.schoolStudentEnrollmentRequest?.person?.id;
    this.model.academicYearYear = this.schoolStudentEnrollmentRequest?.academicYearYear ?? new Date().getFullYear();
  }

  ngOnInit() {
    this.getAcademicYears$ = this.graphqlService.getGqlQueryObservable(GET_ACADEMIC_YEARS).pipe(
      map(res => {
        if (res && res.data && res.data.academicYears && res.data.academicYears.items) {
          return res.data.academicYears.items.map((x: AcademicYearModel) => ({ value: x.year, label: x.year }))
        }
      })
    );

    this.getClassesBySchool$ = this.graphqlService.getGqlQueryObservable(GET_CLASSES_BY_SCHOOL, { schoolId: this.schoolStudentEnrollmentRequest?.school?.id }).pipe(
      map(res => {
        if (res && res.data && res.data.classes && res.data.classes.items) {
          return res.data.classes.items.map((x: ClassModel) => ({ value: x.id, label: `${this.titleCaseWithSpacePipe.transform(x.grade)} ${x.section} (${x.languageName})` }))
        }
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
            key: 'classId',
            type: 'select',
            props: {
              label: 'Class',
              type: 'select',
              placeholder: 'Enter Class',
              options: this.getClassesBySchool$,
              required: true,
            },
            validators: {
              validation: [(x: AbstractControl) => x && x.value ? null : { 'classId': true }],
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

    const mutation = CREATE_SCHOOL_STUDENT_ENROLLMENT;
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
