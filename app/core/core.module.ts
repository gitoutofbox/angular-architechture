import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './authentication';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  exports: []
})
export class CoreModule { }
