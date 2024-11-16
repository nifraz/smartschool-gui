import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { UserLoginRequest } from '../../shared/models';
import { ErrorAlertComponent } from "../../shared/components/error-alert/error-alert.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    ErrorAlertComponent,
    RouterLink,
    RouterLinkActive,
    MatProgressBarModule,
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({});
  model: UserLoginRequest = {
    email: '',
    mobileNo: '',
    password: '',
  };
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-12 col-md-12',
          key: 'email',
          type: 'input',
          props: {
            label: 'Email',
            type: 'email',
            placeholder: 'Enter Email',
            required: true,
          }
        },
        // {
          // className: 'col-12 col-md-12',
        //   key: 'mobileNo',
        //   type: 'input',
        //   props: {
        //     label: 'Mobile No',
        //     type: 'phone',
        //     placeholder: 'Enter Mobile No',
        //     required: true,
        //   }
        // },
        {
          className: 'col-12 col-md-12',
          key: 'password',
          type: 'input',
          props: {
            label: 'Password',
            type: 'password',
            placeholder: 'Enter Password',
            required: true,
          }
        },
      ]
    },
  ];
  
  loading: boolean = false;
  error: any | null;

  constructor(
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
    this.authService.login(this.model)
      .subscribe({
        next: () => {
          this.loading = false;
          this.error = null;
        },
        error: error => {
          this.loading = false;
          this.error = error;
        }
      });
  }

  onForgotPassword() {
    // Handle forgot password logic
    alert('Forgot Password clicked');
  }
}
