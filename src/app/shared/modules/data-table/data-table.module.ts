import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyHeadDirective } from './directives/sticky-head.directive';
import { DataTableComponent } from './components/data-table/data-table.component';

// import { ActionEditComponent } from '@modules/users/components/action-edit/action-edit.component';
// import { ActionDeleteComponent } from '@modules/users/components/action-delete/action-delete.component';
// import { ChangeStatusComponent } from '@modules/users/components/change-status/change-status.component';
// import { CheckRowComponent } from '@modules/users/components/check-row/check-row.component';

import { ComponentLoaderModule } from '@shared/modules/component-loader/component-loader.module';


@NgModule({
  declarations: [DataTableComponent, StickyHeadDirective, 
    // ActionEditComponent, 
    // ActionDeleteComponent, 
    // ChangeStatusComponent,
    // CheckRowComponent
  ],
  imports: [CommonModule, ComponentLoaderModule],
  exports: [DataTableComponent],
  entryComponents: [
    //ActionEditComponent, ActionDeleteComponent, 
    //ChangeStatusComponent,
    // CheckRowComponent
  ]
})
export class DataTableModule { }
