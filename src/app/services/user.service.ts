import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, catchError, of, delay, first } from 'rxjs';

import { environment } from './../../environments/environment';
import { UserDto } from './../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = `${environment.URL_MANAGEFARM_API}/api/user`;

  constructor(private httpClient: HttpClient) {}

  read(): Observable<UserDto[]> {
    return this.httpClient
      .get<UserDto[]>(`${this.baseUrl}/listar`)
      .pipe(map((response) => response));
  }
}
