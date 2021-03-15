import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../auth/auth.service";
import { catchError } from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService, private router: Router) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.auth.getToken()) {
      request = this.addToken(request, this.auth.getToken());
    }

    return next.handle(request).pipe(catchError((error: any) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.router.navigate(['/login']);
      }
      return error
    }))as Observable<HttpEvent<any>>;
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

}
