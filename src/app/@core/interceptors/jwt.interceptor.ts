import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.authService.userValue;
        const isLogin = user && user.refreshtoken;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if(isLogin && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.refreshtoken}`
                }
            })
        }
        return next.handle(request);
    }
}