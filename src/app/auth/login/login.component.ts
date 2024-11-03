import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { UserLoginRequest } from '../../shared/models';
import { ErrorAlertComponent } from "../../shared/components/error-alert/error-alert.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    ErrorAlertComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({});
  model: UserLoginRequest = { email: '', mobileNo: '', password: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        type: 'email',
        placeholder: 'Enter Email',
        required: true,
      }
    },
    // {
    //   key: 'mobileNo',
    //   type: 'input',
    //   templateOptions: {
    //     label: 'Mobile No',
    //     type: 'phone',
    //     placeholder: 'Enter Mobile No',
    //     required: true,
    //   }
    // },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter Password',
        required: true,
      }
    },
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
    this.authService.login(this.model)
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

  onForgotPassword() {
    // Handle forgot password logic
    alert('Forgot Password clicked');
  }
}
