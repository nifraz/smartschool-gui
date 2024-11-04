import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { Sex, UserRegisterRequest } from '../../shared/models';
import { ErrorAlertComponent } from "../../shared/components/error-alert/error-alert.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { enumToArray, toDateOnlyString } from '../../shared/services/graphql.service';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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
export class RegisterComponent {
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
          type: 'radio',
          props: {
            label: 'Sex',
            type: 'password',
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
  
  loading: boolean = false;
  error: any | null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.error = null;

    if (typeof this.model.dateOfBirth !== "string") {
      this.model.dateOfBirth = toDateOnlyString(this.model.dateOfBirth);
    }

    this.authService.register(this.model)
      .subscribe({
        next: () => {
          this.loading = false;
          this.error = null;
          this.router.navigate(['/']);
        },
        error: error => {
          this.loading = false;
          this.error = error;
        }
      });
  }
}
