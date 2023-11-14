import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  myPieChart: any = [];
  myDoughnutChart: any = [];

  pieChartData: number[] = [300, 500, 200];
  pieChartLabels: string[] = ['Red', 'Green', 'Blue'];

  createPieChart() {
    this.myPieChart = new Chart('myPieChart', {
      type: 'pie',
      data: {
        labels: this.pieChartLabels,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.pieChartData,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options:{
        responsive: true,
      }
    });
  }

  createDoughnutChart(){
    this.myDoughnutChart = new Chart('myDoughnutChart', {
      type: 'doughnut',
      data: {
        labels: this.pieChartLabels,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.pieChartData,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options:{
        responsive: true,
      }
    });
  }
  
  ngOnInit() {
    this.createDoughnutChart()
    this.createPieChart()
  }
}
