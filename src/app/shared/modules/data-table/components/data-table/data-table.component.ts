import { Component, OnInit, Input } from '@angular/core';
import { Coulmn } from '../../interfaces/data-table.interface';
import { DynamicLoadService } from '@shared/services/dynamic-load';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit {
  public components: any;
  @Input() tableHeaders: Array<Coulmn> = [];
  @Input() tableData: Array<any> = [];
  constructor(private dynamicLoadService : DynamicLoadService) { }

  ngOnInit() {
    this.components = this.dynamicLoadService.getComponent();
    // this.tableHeaders = this.tableHeaders.length ? this.tableHeaders : this.testHeaders();
    // this.tableData = this.tableData && this.tableData.length ? this.tableData : this.testData();

    //this.tableHeaders = this.tableHeaders;
  }

  // testHeaders() {
  //   return [
  //     { displayText: 'Col 1', mapWith:'', width: '200' },
  //     { displayText: 'Col 2', mapWith:'', width: '200' },
  //     { displayText: 'Col 3', mapWith:'', width: '200' },
  //     { displayText: 'Col 4', mapWith:'', width: '100' },
  //     { displayText: 'Col 4', mapWith:'', width: '200' }
  //   ];
  // }
  // testData() {
  //   return [
  //     { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
  //     { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
  //     { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' },
  //     { Col1: 10, Col2: 5, Col3: 'asd', Col4: '234', Col5: '3e43' }
  //   ]
  // }
}
