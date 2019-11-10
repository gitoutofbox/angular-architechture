import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Coulmn } from '../../interfaces/data-table.interface';

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}


@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit {
  public columns: Array<Coulmn>;
  public columnData: Array<any>;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  @Input() tableHeaders: Array<Coulmn> = [];
  @Input() tableData: Array<any> = [];

  ngOnInit() {
   
    this.tableHeaders = this.tableHeaders.length ? this.tableHeaders : this.testHeaders();
    this.tableData = this.tableData.length ? this.tableData : this.testData();
  }

  testHeaders() {
    return [
      { name: 'Col1', displayText: 'Col 1', width: '200' },
      { name: 'Col2', displayText: 'Col 2', width: '200' },
      { name: 'Col3', displayText: 'Col 3', width: '200' },
      { name: 'Col4', displayText: 'Col 4', width: '100' },
      { name: 'Col5', displayText: 'Col 4', width: '200' }
    ];
  }
  testData() {
    return [
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
      { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' }
    ]
  }


  // @ViewChild(AdDirective, {read: true}) componentHost: AdDirective;
  // loadComponent() {
    
  //   let component: string = 'ActionEditComponent';
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory("ActionEditComponent");

  //   const viewContainerRef = this.componentHost.viewContainerRef;
  //   viewContainerRef.clear();

  //   const componentRef = viewContainerRef.createComponent(componentFactory);
  //   //(<AdComponent>componentRef.instance).data = adItem.data;
  // }

}
