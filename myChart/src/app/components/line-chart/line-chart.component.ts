import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  myLineChart: any = []; //สร้างตัวแปรมาเก็บค่าก่อน

  data:Array<any> = [9,7,3,5,2,10,15,61,19,3,1,9]
  label:Array<string> = ["Jan","Feb","March","April","May","June","July","August","Sep","Oct","Nov","Dec"]
  
  
    ngOnInit(){
      this.myLineChart = new Chart('myLineChart', { 
          // สร้าง object และใช้ชื่อ id lineChart ในการอ้างอิงเพื่อนำมาเเสดงผล
          type: 'line', 
          //ระบุประเภทของ chart 
          data: { 
          // ระบุข้อมูลต่างๆ ภายในแผนภูมิของเรา
              labels: this.label ,
              // labels เป็นตัวระบุชื่อของข้อมูลในแนวแกน x
              datasets: [{ 
                // กำหนดค่าข้อมูลที่ต้องแสดงภายในแผนภูมิแบบเส้น
                label: 'Number of items sold in months',
                data: this.data , 
              }]
          },
          options: {
  
          }
      })
    }
}
