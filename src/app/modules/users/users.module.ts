import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';

import { SharedModule } from '@shared/shared.module';
import { CheckRowComponent } from './components/check-row/check-row.component';
import { ChangeStatusComponent } from './components/change-status/change-status.component';
import { ActionDeleteComponent } from './components/action-delete/action-delete.component';
 import { ActionEditComponent } from './components/action-edit/action-edit.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'update', component: UpdateComponent }
];
@NgModule({
  declarations: [ListComponent, UpdateComponent, 
    CheckRowComponent,
    ActionEditComponent,
    ChangeStatusComponent,
    ActionDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule,

    FormsModule,
    ReactiveFormsModule
  ],
  // exports: [ActionEditComponent],
   entryComponents: [
    CheckRowComponent,
    ActionEditComponent,
    ChangeStatusComponent,
    ActionDeleteComponent
   ]
})
export class UsersModule { }
