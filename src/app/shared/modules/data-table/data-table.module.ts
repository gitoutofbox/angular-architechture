import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyHeadDirective } from '@shared/directives/sticky-head.directive';

import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  declarations: [DataTableComponent, StickyHeadDirective],
  imports: [CommonModule],
  exports: [DataTableComponent, StickyHeadDirective]
})
export class DataTableModule { }
