import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterUserPayload } from '../models/payloads/register-user.payload';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // registerUser(user: IRegisterUserPayload) {
  registerUser(user: any) {
    return this.http.post(`${environment.apiUrl}users/register`, user);
  }
}
