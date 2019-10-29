import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);
@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.sass']
})
export class DonutChartComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: any;
  //_data: any;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() enable3d: boolean = true;
  @Input() data: any;
  // @Input() set data(value: string) {
  //   this._data = value;
  // }

  constructor() { }

  ngOnInit() {
    this.drawChart();
  }

  drawChart() {


    this.chartOptions = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: this.enable3d,
          alpha: 45
        }
      },
      title: {
        text: this.title
      },
      subtitle: {
        text: this.subTitle
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        //name: 'Delivered amount',
        data: this.data
      }]
    };
  }
}
