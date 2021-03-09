import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [ CommonModule, AuthModule, LayoutModule ],
  declarations: [ AuthModule ],
})
export class ViewsModule { }
