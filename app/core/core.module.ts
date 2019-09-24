import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './authentication/backend/authentication.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationModule
  ],
  providers: [],
  exports: []
})
export class CoreModule { }
