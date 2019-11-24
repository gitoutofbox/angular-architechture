import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderComponent } from './components/component-loader/component-loader.component';
import { ComponentLoaderDirective } from './directives/component-loader.directive';

@NgModule({
  declarations: [ComponentLoaderComponent, ComponentLoaderDirective],
  imports: [CommonModule],
  exports: [ComponentLoaderComponent]
})
export class ComponentLoaderModule { }
