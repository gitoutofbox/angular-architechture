import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public totalRecords: number = 100;
  public recordsPerPage: number = 5;
  public currentPage: number = 7;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('http://localhost:8081/users').subscribe(data => {
      console.log(data);
    })
  }
  doPaginate(toPage: number) {
    this.currentPage = toPage;
  }
}
