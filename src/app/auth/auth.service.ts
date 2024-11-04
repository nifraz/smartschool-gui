import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, iif, map, Observable, throwError } from 'rxjs';
import { AuthenticateResponse, UserLoginRequest, UserRegisterRequest } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(model: UserLoginRequest): Observable<AuthenticateResponse> {
    return this.http.post<any>('https://localhost:5001/api/auth/login', model).pipe(
      map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  register(model: UserRegisterRequest): Observable<AuthenticateResponse> {
    return iif(() => !!(model.password == model.password2),
      this.http.post<any>('https://localhost:5001/api/auth/register', model),
      throwError(() => ({
        error: {
          message: "Passwords do not match",
        }
      }))
    )
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
