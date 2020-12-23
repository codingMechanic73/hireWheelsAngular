import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { userDetails } from '../model/userDetails';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<userDetails>();

  url: string = 'http://localhost:8012/users'

  constructor(private httpClient: HttpClient) { }

  createAccount(user: User) {
    return this.httpClient.post<User>(this.url, user).pipe(catchError(this.errorHandler));
  }

  signin(credentials) {
    return this.httpClient.post(`${this.url}/access-token`, credentials).pipe(catchError(this.errorHandler),
      tap((response: userDetails) => {
        this.saveUser(response);
        this.user.next(response);
      }));
  }

  resetPassword(user: User) {
    return this.httpClient.put(`${this.url}/access-token/password`, user).pipe(catchError(this.errorHandler));
  }

  private saveUser(userDetails: userDetails) {
    localStorage.setItem('token', userDetails.jwtToken);
    localStorage.setItem('user', JSON.stringify(userDetails));
  }

  getUser(): userDetails {
    return JSON.parse(localStorage.getItem('user'));
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }

  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.clear();
    this.user.next(new userDetails());
  }
  private errorHandler(errorRes: HttpErrorResponse) {
    
    console.log('error', errorRes);
    localStorage.clear();
    return throwError(errorRes.error);
  }
}
