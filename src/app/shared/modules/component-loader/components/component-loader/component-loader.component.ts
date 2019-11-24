import { Component,ViewContainerRef,  Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, AfterViewInit } from '@angular/core';
import { ComponentItem } from '../../interfaces/component-item.interface';

// import { Type } from '@angular/core';
// export class ComponentItem {
//   constructor(public component: Type<any>, public data: any) {}
// }
@Component({
  selector: 'app-component-loader',
  templateUrl: './component-loader.component.html',
  styleUrls: ['./component-loader.component.sass']
})
export class ComponentLoaderComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() components: ComponentItem[];

  @ViewChild('componentHost', {static: true, read: ViewContainerRef} as any) componentHost: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  ngAfterViewInit() {
    this.loadComponent();
  }
  ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }

  
  loadComponent() {
    if(typeof this.componentHost !== 'undefined'){
      let componentObj= this.components[0];      
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentObj.component);
      const componentRef = this.componentHost.createComponent(componentFactory);
      (<any>componentRef.instance).data = componentObj.data;
    }
  }
}
