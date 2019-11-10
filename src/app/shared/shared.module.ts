import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ModalWindowComponent } from './components/modal-window/modal-window.component';

import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { ChartsModule } from './modules/charts/charts.module';
import { DataTableModule } from './modules/data-table/data-table.module';


@NgModule({
  declarations: [HeaderComponent, ModalWindowComponent, PaginationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    DataTableModule
  ],
  exports: [HeaderComponent, ModalWindowComponent, PaginationComponent, ChartsModule, DataTableModule]
})
export class SharedModule { }
