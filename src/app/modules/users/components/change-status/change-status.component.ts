import { Component, OnInit, Input, AfterViewInit  } from '@angular/core';
import { ApiService } from '@core/services/api.service';


@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.sass']
})
export class ChangeStatusComponent implements OnInit, AfterViewInit  {
  @Input() data: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('data', this.data) 

  }
  ngAfterViewInit() {
    console.log('data', this.data) 
  }
  changeStatus() {
    console.log('data', this.data.is_active)
    const payload = {
      "is_active"   : !this.data.is_active
    };
    this.apiService.put(`http://localhost:8081/user/${this.data.user_id}`,payload).subscribe(resp => {
      //this.tableData = resp['data'];
      console.log(resp)
      this.data.is_active = !this.data.is_active;
    })
  }
}
