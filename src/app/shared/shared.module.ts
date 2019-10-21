import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ModalWindowComponent } from './components/modal-window/modal-window.component';

import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [HeaderComponent, ModalWindowComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, ModalWindowComponent]
})
export class SharedModule { }
