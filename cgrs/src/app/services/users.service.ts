import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterUserPayload } from '../models/payloads/register-user.payload';
import { IUser } from '../models/user';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
    ) { 
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  registerUser(user: any) {
    return this.http.post(`${environment.apiUrl}users/register`, user);
  }

  authenticateUser(loginPayload: any): Observable<IUser> {
    return this.http.post<IUser>(
      environment.apiUrl + 'Users/authenticate',
      loginPayload)
      .pipe(map(user => {

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
