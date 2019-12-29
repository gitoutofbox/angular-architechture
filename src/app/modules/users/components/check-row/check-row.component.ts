import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-row',
  templateUrl: './check-row.component.html',
  styleUrls: ['./check-row.component.sass']
})
export class CheckRowComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

  changeSelection() {
    this.data.user_first_name = 'Hi';
    console.log(this.data);
  }
}
