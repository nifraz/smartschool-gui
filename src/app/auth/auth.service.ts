import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, iif, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { AuthenticateResponse, UserLoginRequest, UserRegisterRequest, UserResponse } from '../shared/models';
import moment, { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLoggedSubject: BehaviorSubject<number>;
  public userLogged: Observable<number>;
  public loggedInUser?: UserResponse | null;

  constructor(
    private http: HttpClient
  ) {
    this.userLoggedSubject = new BehaviorSubject<number>(this.getUserId());
    this.userLogged = this.userLoggedSubject.asObservable();
  }

  login(model: UserLoginRequest): Observable<AuthenticateResponse> {
    return this.http.post<AuthenticateResponse>('https://localhost:5001/api/auth/login', model).pipe(
      tap(res => {
        this.setSession(res);
        this.userLoggedSubject.next(res.userId);
      })
    );
  }

  register(model: UserRegisterRequest): Observable<AuthenticateResponse> {
    return iif(
      () => !!(model.password == model.password2),
      this.http.post<any>('https://localhost:5001/api/auth/register', model),
      throwError(() => ({
        error: {
          message: "Passwords do not match",
        }
      }))
    )
  }
  
  logout() {
      this.userLoggedSubject.next(0);

      localStorage.removeItem('userId');
      localStorage.removeItem("token");
      localStorage.removeItem("expires");
  }
  
  getUser(id: number): Observable<UserResponse> {
    return this.http.get<any>(`https://localhost:5001/api/auth/user/${id}`).pipe(
      tap(res => {
        this.loggedInUser = res;
      }),
      catchError(err => {
        this.loggedInUser = null;
        return throwError(() => err);
      })
    );
  }

  private setSession(model: AuthenticateResponse) {
    // model.expires is in UTC format
    const expiresAt = moment(model.expires);
    localStorage.setItem('userId', model.userId.toString());
    localStorage.setItem('token', model.token);
    localStorage.setItem('expires', JSON.stringify(expiresAt.valueOf()));
  }

  getUserId(): number {
    return +(localStorage.getItem('userId') ?? "0");
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getExpiration(): Moment | null {
      const expiration = localStorage.getItem('expires');
      if (!expiration) {
        return null;
      }
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }
  
  getLoggedInUser(): UserResponse | null {
    return this.isLoggedIn() ? JSON.parse(localStorage.getItem('userId') ?? "null") : null;
  }

  public isLoggedIn(): boolean {
      const expiration = this.getExpiration();
      return !!expiration && moment().isBefore(expiration);
  }

  isLoggedOut(): boolean {
      return !this.isLoggedIn();
  }
}
