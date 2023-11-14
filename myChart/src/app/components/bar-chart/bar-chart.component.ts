import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
 
  myBarChart: any = []; //สร้างตัวแปรมาเก็บค่าก่อน

  data:Array<number> = [65, 59, 80, 81, 56]
  label: Array<string> = ['January', 'February', 'March', 'April', 'May']

    ngOnInit(){
      this.myBarChart = new Chart('myBarChart', { 
          // สร้าง object และใช้ชื่อ id myBarChart ในการอ้างอิงเพื่อนำมาเเสดงผล
          type: 'bar',  // กำหนดประเภทของ chart 
          data: {       // ระบุข้อมูลต่างๆ ภายในแผนภูมิของเรา
              labels: this.label ,  // แสดงป้ายชื่อสำหรับจุดข้อมูลบนแกน x
              datasets: [{  // กำหนดค่าชุดข้อมูลที่ต้องการแสดงบนแผนภูมิของเรา และกำหนด Style ของชุดข้อมูล
                label: 'Monthly Sales',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: this.data , 
              }]
          },
          options:{
            scales: { //กำหนดรายละเอียดข้อมูลแกน X และแกน Y
              y: {
                  beginAtZero: true // เป็นการกำหนดค่าข้องแนวแกน Y เริ่มต้นที่ 0
              }
            },
          

          }
      })
    }
}
