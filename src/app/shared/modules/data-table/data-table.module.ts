import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyHeadDirective } from './directives/sticky-head.directive';
import { DataTableComponent } from './components/data-table/data-table.component';

import { ActionEditComponent } from '@modules/users/components/action-edit/action-edit.component';


@NgModule({
  declarations: [DataTableComponent, StickyHeadDirective, ActionEditComponent],
  imports: [CommonModule],
  exports: [DataTableComponent, ActionEditComponent],
  entryComponents: [ActionEditComponent]
})
export class DataTableModule { }
