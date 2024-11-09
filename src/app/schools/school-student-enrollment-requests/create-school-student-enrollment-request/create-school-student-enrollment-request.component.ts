import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
import { Grade, PersonModel, SchoolModel, SchoolStudentEnrollmentRequestInput } from '../../../../../graphql/generated';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../../../shared/graphql-record-form/graphql-record-form.component';
import { CREATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST } from '../../../shared/mutations';
import { FormComponent } from '../../../shared/components/form/form.component';

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
  templateUrl: './create-school-student-enrollment-request.component.html',
  styleUrl: './create-school-student-enrollment-request.component.scss'
})
export class CreateSchoolStudentEnrollmentRequestComponent<SchoolStudentEnrollmentRequestModel> extends FormComponent<SchoolStudentEnrollmentRequestModel> implements OnInit {
  school?: SchoolModel;
  person?: PersonModel;
  
  form = new FormGroup({});
  model: SchoolStudentEnrollmentRequestInput = {
    schoolId: 0,
    academicYearYear: 0,
    grade: Grade.None,
    personId: 0,
  };
  fields: FormlyFieldConfig[] = [
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
            options: [
              { label: '2024', value: 2024 },
              { label: '2025', value: 2025 },
            ],
            required: true,
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
            options: enumToArray(Grade).map(x => ({ label: x.caption, value: x.value })),
            required: true,
          },
        },
        
      ],
    },
    // {
    //   className: 'section-label',
    //   template: '<hr /><div><strong>Address:</strong></div>',
    // },

  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private graphqlService: GraphqlService,
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
