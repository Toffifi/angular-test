import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
