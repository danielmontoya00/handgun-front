import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../store/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!req.url.includes('api/auth/local') && !req.url.includes('auth')) {
      if (this.auth.isAuthCheck()) {

        let headers: any = {
          Authorization: `Bearer ${this.auth.getToken()}`
        };

        req = req.clone({
          setHeaders: headers
        });
      }
    }
    return next.handle(req);
  }
}
