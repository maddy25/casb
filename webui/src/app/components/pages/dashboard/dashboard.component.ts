import { Component, OnInit } from '@angular/core';

@Component({
	selector: 's-dashboard-pg',
	templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.scss'],
})

export class DashboardComponent implements OnInit {

  // Incidents Chart
  public incidentChartLabels:string[] = ['Critical', 'Alert', 'Warning', 'Info'];
  public incidentChartData:number[] = [50, 250, 100, 300];
  public incidentChartType:string = 'doughnut';

  // events
  public incidentChartClicked(e:any):void {
    console.log(e);
  }

  public incidentChartHovered(e:any):void {
    console.log(e);
  }

	ngOnInit() { }
}
