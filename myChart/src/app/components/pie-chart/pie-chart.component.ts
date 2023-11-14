import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  myPieChart: any = []; //สร้างตัวแปรมาเก็บค่าก่อน

  data:Array<any> = [9,7,3,5,2,10,15,61,19,3,1,9]
  label:Array<string> = ["Jan","Feb","March","April","May","June","July","August","Sep","Oct","Nov","Dec"]
  
  
    ngOnInit(){
      this.myPieChart = new Chart('myPieChart', { 
          // สร้าง object และใช้ชื่อ id myPieChart ในการอ้างอิงเพื่อนำมาเเสดงผล
          type: 'pie', 
          //ระบุประเภทของ chart 
          data :{
            labels: [
              'Red',
              'Blue',
              'Yellow'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          }
      })
    }
}
