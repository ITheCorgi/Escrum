import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { Role } from '../models/role';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

const users = [
    { id: 1, email: 'superadmin@escrum.com', password: 'superadmin', username:'superadmin', role:Role.SuperAdmin },
    { id: 2, email: 'owner@escrum.com', password: 'owner', username:'owner', role:Role.Owner },
    { id: 3, email: 'user@escrum.com', password: 'user', username:'user', role:Role.User }
]

@Injectable()
export class FakeService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call (https://github.com/Reactive-Extensions/RxJS/issues/648)
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());      

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/auth') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        function authenticate() {
            const { email, password } = body;
            const user = users.find(x => x.email === email && x.password === password);
            
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role,
                token: `fake-jwt-token.${user.id}`
            });
        }

        function register() {
            const user = body

            if (users.find(x => x.email === user.email)) {
                return error('Username with following email"' + user.email + '" is already registered')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        function getUsers() {
            if (!isAdmin()) return unauthorized();
            return ok(users);
        }

        function getUser() {
            if (!isLoggedIn()) return unauthorized();

            // only admins can access other user records
            if (!isAdmin() && currentUser()?.id !== idFromUrl()) return unauthorized();

            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'unauthorized' } })
        }

        function error(message: string) {
            return throwError({ status: 400, error: { message } })
                .pipe(materialize(), delay(500), dematerialize());
        }

        function isLoggedIn() {
            const authHeader = headers.get('Authorization')!;
            return authHeader.startsWith('Bearer fake-jwt-token');
        }

        function isAdmin() {
            return isLoggedIn() && currentUser()?.role === Role.SuperAdmin;
        }

        function currentUser() {
            if (!isLoggedIn()) return;
            const id = parseInt(headers.get('Authorization')!.split('.')[1]);
            return users.find(x => x.id === id);
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeService,
    multi: true
};