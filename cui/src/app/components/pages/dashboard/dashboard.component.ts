import { Component, OnInit } from '@angular/core';

@Component({
	selector: 's-dashboard-pg',
	templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.scss'],
})

export class DashboardComponent implements OnInit {

  // Incidents Chart
  public incidentChartLabels:string[] = ['Critical', 'Alert', 'Warning', 'Info'];
  public incidentChartData:number[]   = [50, 250, 100, 300];
  public incidentChartColors =[{
      backgroundColor: ['red','green','blue','orange'],
      borderColor: ['red','green','blue','orange'],
      pointBackgroundColor: ['red','green','blue','orange'],
      pointBorderColor: ['red','green','blue','orange'],
      pointHoverBackgroundColor: ['red','green','blue','orange'],
      pointHoverBorderColor: ['red','green','blue','orange']
  }];


  public incidentChartType:string     = 'doughnut';
  public incidentChartOptions:any     = {
    cutoutPercentage:"80",
    legend:{
      position:'right',
      labels:{
        boxWidth:12,
        fontFamily:"'Metropolis'"
      }
    }
  }




  // events
  public incidentChartClicked(e:any):void {
   // console.log(e);
  }

  public incidentChartHovered(e:any):void {
    //console.log(e);
  }

	ngOnInit() { }
}
