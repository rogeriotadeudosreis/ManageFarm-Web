import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { User } from '../models/user';
import { environment } from './../../environments/environment';
import { UserDto } from './../models/user-dto';
import { UserDtoLogado } from './../models/user-dto-logado';
import { UserLogin } from './../models/user-login';
import { TokenService } from './toke.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = `${environment.URL_MANAGEFARM_API}/api/user`;
  private readonly baseUrlLogin = `${environment.URL_MANAGEFARM_API}`;

  private userSubject = new BehaviorSubject<UserDtoLogado>({
    iss: '',
    sub: '',
  });

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  read(): Observable<UserDto[]> {
    return this.httpClient
      .get<UserDto[]>(`${this.baseUrl}/listar`)
      .pipe(map((response) => response));
  }

  save(user: User): Observable<User> {
    console.log(JSON.stringify(user));
    return this.httpClient.post(`${this.baseUrl}/criar`, user);
  }

  login(user: UserLogin) {
    console.log('Dados enviados para login: ', JSON.stringify(user));
    return this.httpClient.post(`${this.baseUrlLogin}/auth`, user).pipe(
      map((res) => {
        const authToken: any = res;
        this.tokenService.setToken(authToken.token);
      })
    );
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  private decodeAndNotify() {
    const token: any = this.tokenService.getToken();
    const userLogado = jwt_decode(token) as UserDtoLogado;
    this.userSubject.next(userLogado);
    console.log('Token decodificado: ', userLogado);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null!);
  }
}
