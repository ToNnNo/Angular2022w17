import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authentication: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authenticationRequest = request.clone({
      headers: request.headers.append('Authorization', `Bearer ${this.authentication.getToken()}` )
    });

    return next.handle(authenticationRequest).pipe(
      tap( response => console.log(response) )
    );
  }
}
