import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderComponent } from './components/component-loader/component-loader.component';

@NgModule({
  declarations: [ComponentLoaderComponent],
  imports: [CommonModule],
  exports: [ComponentLoaderComponent]
})
export class ComponentLoaderModule { }
