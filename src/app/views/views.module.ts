import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AuthModule],
  imports: [
    CommonModule,
    AuthModule
  ],
  exports: []
})
export class ViewsModule { }
