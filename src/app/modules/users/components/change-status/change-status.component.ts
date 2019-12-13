import { Component, OnInit, Input, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.sass']
})
export class ChangeStatusComponent implements OnInit, AfterViewInit  {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    console.log('data', this.data) 

  }
  ngAfterViewInit() {
    console.log('data', this.data) 
  }
  changeStatus() {
    console.log('data', this.data.is_active)
  }
}
