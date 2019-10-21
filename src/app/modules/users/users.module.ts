import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';



const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'update', component: UpdateComponent }
];
@NgModule({
  declarations: [ListComponent, UpdateComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
