import { Component } from '@angular/core';

import { AuthService } from 'src/app/@core/services/auth.service'
import { IUser } from '../../@core/models/user'
import { Role } from '../../@core/models/role'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  user!: IUser;

  constructor(private authService: AuthService) { 
    this.authService.user$.subscribe(x => this.user = x);
  }

  isSuperAdmin(): boolean {
    return this.user && this.user === Role.SuperAdmin;
  }

  logout(): void {
    this.authService.logout();
  }

}
