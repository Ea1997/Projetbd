import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  statistique_maroc:any=null;
  province:any=null;
  allstats:any=null;

  constructor(private http:HttpClient){


}
ngOnInit(){
  this.http.get('http://localhost:3000/allstats', {

  }).subscribe(
      (data:any) => {

       console.log(data);
       this.allstats=data;
      }
      );
  this.http.get('http://localhost:3000/stats', {

  }).subscribe(
      (data:any) => {

       console.log(data);
       this.statistique_maroc=data;
      }
      );
      this.http.get('http://localhost:3000/stats/province', {

      }).subscribe(
          (data:any) => {

           console.log(data);
           this.province=data;

          }
          );


          setTimeout(()=>{
            let diffj1,diffj2,diffj3,diffj4,diffj5,diffj6;
            var count = Object.keys(this.allstats).length;
            console.log(count)
           console.log(this.allstats[count-1].Confirmed)
           diffj1=this.allstats[count-1].Confirmed-this.allstats[count-2].Confirmed;
           diffj2=this.allstats[count-2].Confirmed-this.allstats[count-3].Confirmed;
           diffj3=this.allstats[count-3].Confirmed-this.allstats[count-4].Confirmed;
           diffj4=this.allstats[count-4].Confirmed-this.allstats[count-5].Confirmed;
           diffj5=this.allstats[count-5].Confirmed-this.allstats[count-6].Confirmed;
           diffj6=this.allstats[count-6].Confirmed-this.allstats[count-7].Confirmed;

            var myChart = new Chart('mychart', {
              type: 'bar',
              data: {
                  labels: ['J-5', 'J-4', 'J-3', 'J-2', 'Hier', "Aujourd'hui"],
                  datasets: [{
                      label: "L’évolution de la pandémie du coronavirus par jour au Maroc",
                      data: [ diffj6,diffj5, diffj4, diffj3,diffj2,diffj1],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              }
          });
          },1500)

}
}
