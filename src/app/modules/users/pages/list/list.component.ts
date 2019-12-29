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
  tableHeaders  = [
    {displayText:'First Name', mapWith: 'user_first_name', width: '200'}, 
    {displayText: 'Last Name', mapWith: 'user_last_name', width: '200'},
    {displayText: 'Email', mapWith: 'user_email', width: '400'},
    {displayText: 'Status', mapWith: '', width: '70', class: "text-center", components:['ChangeStatusComponent']},
    {displayText: 'Action', mapWith: '', width: '150', class: "text-center action-column", components: ['ActionEditComponent', 'ActionDeleteComponent']}
  ];
  public tableData ;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('http://localhost:8081/userList').subscribe(resp => {
      this.tableData = resp['data'];
    })
  }
  doPaginate(toPage: number) {
    this.currentPage = toPage;
  }
}
