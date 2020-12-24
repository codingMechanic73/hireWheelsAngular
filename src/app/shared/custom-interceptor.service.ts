import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {

  baseUrl = "http://localhost:8012"

  apiToSkip = ['/users/access-token',
    '/access-token/refresh',
    '/users/access-token/password',
    '/users',
    '/vehicles']

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const skip = this.apiToSkip.find(api => {
      console.log(req.url, this.baseUrl + api, req.url === this.baseUrl + api);
      return req.url === this.baseUrl + api
    });
    console.log(skip);
    if (skip) {
      console.log('intercept skipped for ', req)
      return next.handle(req);
    }

    req = req.clone({ headers: req.headers.set('X-ACCESS-TOKEN', this.authService.getToken()) })
    console.log('intercept modified for ', req)
    return next.handle(req);
  }
}
