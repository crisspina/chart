import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  myLineChart: any = []; //สร้างตัวแปรมาเก็บค่าก่อน

  data: Array<any> = [9, 7, 3, 5, 2, 10, 15, 61, 19, 3, 1, 9];
  label: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  data1: Array<any> = [65, 59, 80, 81, 56, 55, 40];
  data2: Array<any> = [28, 48, 40, 19, 86, 27, 90];

  ngOnInit() {
    this.myLineChart = new Chart('myLineChart', {
      type: 'line',
      data: {
        labels: this.label,
        datasets: [
          {
            label: 'series A',
            data: this.data1,
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            pointStyle: 'circle',
          },
          {
            label: 'series B',
            data: this.data2,
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: 'red',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
            pointStyle: 'star', //กำหนดรูปร่างของ point
            stepped: true, //กำหนด Stepped Line Charts
          },
        ],
      },
      options: {
        responsive: true,
        //กำหนด ชื่อของแกน X,Y
        scales: {
          x: {
            //แกน x
            display: true,
            title: {
              display: true,
              text: 'Month',
            },
          },
          y: {
            //แกน y
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    });
  }
}
