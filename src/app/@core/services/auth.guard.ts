import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable ({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
        ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authService.UserValue;
        if(user) {
            if(route.data.roles && route.data.roles.indexOf(user.role) === -1) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        this.router.navigate(['login-page'], { queryParams: { returnURL: state.url }});
        return false;
    };
}