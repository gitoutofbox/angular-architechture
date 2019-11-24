import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[component-host]'
})
export class ComponentLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

