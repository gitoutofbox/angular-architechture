import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public totalRecords: number = 100;
  public recordsPerPage: number = 5;
  public currentPage: number = 7;
  constructor() { }

  ngOnInit() {
  }
  doPaginate(toPage: number) {
    this.currentPage = toPage;
  }
}
