import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterUserPayload } from '../models/payloads/register-user.payload';
import { IUser } from '../models/user';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private currentUserSubject: BehaviorSubject<IUser>;
  // public currentUser: Observable<IUser>;


  constructor(private http: HttpClient) { 
    // this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue() {
  //   return this.currentUserSubject.value;
  // }

  // registerUser(user: IRegisterUserPayload) {
  registerUser(user: any) {
    return this.http.post(`${environment.apiUrl}users/register`, user);
  }

  authenticateUser(loginPayload: any) {
    return this.http.post<IUser>(
      environment.apiUrl + 'Users/authenticate',
      loginPayload)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          // this.currentUserSubject.next(user);
        }

        return user;
      }));
  }
}
