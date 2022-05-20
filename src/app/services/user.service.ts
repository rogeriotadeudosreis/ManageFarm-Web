import { UserLogin } from './../models/user-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

import { environment } from './../../environments/environment';
import { UserDto } from './../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = `${environment.URL_MANAGEFARM_API}/api/user`;
  private readonly baseUrlLogin = `${environment.URL_MANAGEFARM_API}`;

  constructor(private httpClient: HttpClient) {}

  read(): Observable<UserDto[]> {
    return this.httpClient
      .get<UserDto[]>(`${this.baseUrl}/listar`)
      .pipe(map((response) => response));
  }

  save(user: User): Observable<User> {
    console.log(JSON.stringify(user));
    return this.httpClient.post(`${this.baseUrl}/criar`, user);
  }
  
  login(user: UserLogin): Observable<UserLogin> {
    console.log(JSON.stringify(user));
    return this.httpClient.post(`${this.baseUrlLogin}/auth`, user);
  }
}
