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
  @Input() component: ComponentItem;
  @Input() data: any;

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
      let componentObj= this.component;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentObj.component);
      const componentRef = this.componentHost.createComponent(componentFactory);
      //(<any>componentRef.instance).data = componentObj.data;
      setTimeout(()=> {
        (<any>componentRef.instance).data = this.data;
      },10);
    }
  }
}
