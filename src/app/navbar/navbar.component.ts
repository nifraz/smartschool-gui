import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { iif, of, Subject, switchMap, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../shared/components/base/base.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent extends BaseComponent implements OnInit, OnDestroy {
  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    super();
  }
  
  ngOnInit(): void {
    this.authService.userLogged.pipe(
      takeUntil(this.unsubscribe$),
      switchMap(res => {
        this.isLoading = true;
        if (res && this.authService.isLoggedIn()) {
          return this.authService.getUser(res);
        }
        return of(null);
      }),
    ).subscribe({
      next: res => {
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        this.toastr.error(`Could not load user`, 'User');
      }
    });
  }
  
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'login']);
  }
}
