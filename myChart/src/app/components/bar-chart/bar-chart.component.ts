import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  myBarChart: any = [];

 
  label: Array<string> = ['January', 'February', 'March', 'April', 'May'];

  data: Array<number> = [65, -59, 80, 81, 56];
  data2: Array<number> = [20, 99, 72, 65, -9];
  data3: Array<number> = [-13, 11, 59, 73, -51];

  createData() {
    this.myBarChart = new Chart('myBarChart', {
      // type: 'bar',
      data: {
        labels: this.label,
        datasets: [
          { // dataset ชุดที่ 1
            type: 'bar',
            label: '2022',
            data: this.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          { // dataset ชุดที่ 2
            type: 'line',
            label: '2023',
            data: this.data2,
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 2, 
          },
          { // dataset ชุดที่ 3
            type: 'line',
            label: '2024',
            data: this.data3,
            backgroundColor: 'green',
            borderColor: 'green',
          }
        ],
      },
      options: {
        responsive: true, //set responsive
        plugins: {
          title: {
            display: true,
            text: 'Demo-Bar chart'
          }
        },
        
      },
    });
  }

  ngOnInit() {
    this.createData();
  }
}
