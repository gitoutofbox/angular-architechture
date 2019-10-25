import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';

import {SharedModule } from '@shared/shared.module';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'update', component: UpdateComponent }
];
@NgModule({
  declarations: [ListComponent, UpdateComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
