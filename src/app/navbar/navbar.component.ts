import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserResponse } from '../shared/models';
import { AuthService } from '../auth/auth.service';
import { iif, of, Subject, switchMap, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
export class NavbarComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  user?: UserResponse | null;
  loading: boolean = false;
  
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    
  }
  
  ngOnInit(): void {
    this.authService.userLogged.pipe(
      takeUntil(this.destroy$),
      switchMap(res => {
        this.loading = true;
        if (res) {
          return this.authService.getUser(res);
        }
        return of(null);
      }),
    ).subscribe({
      next: res => {
        this.loading = false;
        this.user = res;
      },
      error: err => {
        this.loading = false;
        this.toastr.error(`Could not load user`, 'User');
      }
    });
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'login']);
  }
}
