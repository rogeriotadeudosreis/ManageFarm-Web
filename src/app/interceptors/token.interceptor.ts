import { environment } from './../../environments/environment';
import { TokenService } from './../services/toke.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.URL_MANAGEFARM_API.split('/');
    const token = this.tokenService.getToken();

    if (token && requestUrl[2] === apiUrl[2]) {
      const newRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }
  }
}
