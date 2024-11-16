import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { FormComponent } from '../../shared/components/form/form.component';
import { UserResponse, VerifyRequest } from '../../shared/models';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { ErrorAlertComponent } from '../../shared/components/error-alert/error-alert.component';
import { toDateOnlyString } from '../../shared/services/graphql.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [
    NgOtpInputModule,
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
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss'
})
export class VerifyComponent extends FormComponent<UserResponse> implements OnInit {
  email?: string | null;
  mobileNo?: string | null;
  otp?: string | null;
  token?: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.email = this.activatedRoute.snapshot.queryParamMap.get('email');
    this.mobileNo = this.activatedRoute.snapshot.queryParamMap.get('mobileNo');
    this.token = this.activatedRoute.snapshot.queryParamMap.get('token');
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    this.error = null;

    const model: VerifyRequest = {
      email: this.email,
      emailOtp: this.otp,
      emailToken: this.token,
      mobileNo: this.mobileNo,
      mobileNoOtp: this.otp,
      mobileNoToken: this.token,
    };

    this.authService.verify(model)
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.error = null;
          this.toastr.success(`Verification successful. Please Login.`, 'Verify');
          this.router.navigate(['/auth', 'login'], { queryParams: { email: res.email }});
        },
        error: error => {
          this.isLoading = false;
          this.error = error;
        }
      });
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }
}
