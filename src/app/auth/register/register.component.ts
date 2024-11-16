import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { UserRegisterRequest } from '../../shared/models';
import { ErrorAlertComponent } from "../../shared/components/error-alert/error-alert.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { enumToArray, toDateOnlyString } from '../../shared/services/graphql.service';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../shared/components/base/base.component';
import { Sex } from '../../../../graphql/generated';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent extends BaseComponent implements OnInit {
  form = new FormGroup({});
  model: UserRegisterRequest = {
    email: '',
    mobileNo: '',
    password: '',
    password2: '',
    fullName: '',
    shortName: '',
    dateOfBirth: '',
    sex: Sex.NotKnown,
  };
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-12 col-md-6',
          key: 'email',
          type: 'input',
          props: {
            label: 'Email',
            type: 'email',
            placeholder: 'Enter Email',
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
            required: true,
          },
        },
        {
          className: 'col-12 col-md-6',
          key: 'password',
          type: 'input',
          props: {
            label: 'Password',
            type: 'password',
            placeholder: 'Enter Password',
            required: true,
          },
        },
        {
          className: 'col-12 col-md-6',
          key: 'password2',
          type: 'input',
          props: {
            label: 'Retype Password',
            type: 'password',
            placeholder: 'Retype Password',
            required: true,
          },
          expressionProperties: {
            'props.disabled': '!model.password',
          },
        },
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
            placeholder: 'Enter Sex',
            options: enumToArray(Sex).map(x => ({ label: x.caption, value: x.value })),
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
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
    super();
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    this.error = null;

    if (typeof this.model.dateOfBirth !== "string") {
      this.model.dateOfBirth = toDateOnlyString(this.model.dateOfBirth);
    }

    this.authService.register(this.model)
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.error = null;
          this.toastr.success(`Registration Successful. Please Login.`, 'Register');
          this.router.navigate(['/auth', 'login']);
        },
        error: error => {
          this.isLoading = false;
          this.error = error;
        }
      });
  }
}
