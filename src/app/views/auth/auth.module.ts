import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login-page', pathMatch: 'full' },
      { path: 'login-page', component: LoginPageComponent }
    
     ]  
  }
];

@NgModule({
  declarations: [AuthComponent, LoginPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    AuthComponent
  ]
})
export class AuthModule { }
