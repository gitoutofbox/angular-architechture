import { Component,ViewContainerRef,  Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, AfterViewInit } from '@angular/core';
// import { ComponentItem } from '../../interfaces/component-item.interface';

@Component({
  selector: 'app-component-loader',
  templateUrl: './component-loader.component.html',
  styleUrls: ['./component-loader.component.sass']
})
export class ComponentLoaderComponent implements OnInit, OnDestroy, AfterViewInit {
  // @Input() component: ComponentItem;
  @Input() component: Array<any>;
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
      for(const component of this.component) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = this.componentHost.createComponent(componentFactory);
        setTimeout(()=> {
          (<any>componentRef.instance).data = this.data;
        },10);
      }
      // let componentObj= this.component;
      // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component[0]);
      // const componentRef = this.componentHost.createComponent(componentFactory);
      // //(<any>componentRef.instance).data = componentObj.data;
      // setTimeout(()=> {
      //   (<any>componentRef.instance).data = this.data;
      // },10);
    }
  }
}
