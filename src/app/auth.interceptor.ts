import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
    HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('AuthInterceptor', req);

    const cloned = req.clone({
      headers: req.headers.append('Auth', 'SomeRandomToken')
    });
    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type ===  HttpEventType.Response ) {
          console.log('AuthInterceptor response event');
        }
      })
    );
  }
}
