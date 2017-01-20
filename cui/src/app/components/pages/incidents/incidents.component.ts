import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { IncidentService } from '../../../api/incident.service';
import { Router } from '@angular/router';

@Component({
	selector: 's-incidents-pg',
	templateUrl: './incidents.component.html',
  styleUrls: [ './incidents.scss'],
})

export class IncidentsComponent implements OnInit {

  @ViewChild('severityCellTpl') severityCellTpl: TemplateRef<any>;
  @ViewChild('statusCellTpl') statusCellTpl: TemplateRef<any>;

  //ngx-Datatable Variables
  columns:any[];
  rows:any[];

  //ngx-Chart Variables
  incidentBySeverityChartData: any[] = [];
  view: any[] = [700, 150];
  colorScheme = { domain: ['#CE1126', '#FFCC00','#AAAAAA','#005d84']};

  constructor( private router: Router, private incidentService: IncidentService) { }

	ngOnInit() {
    var me = this;
    window.setTimeout(function(){me.getIncidentData();}, 300);
    this.columns=[
      {prop:"incidentId"  , name: "ID"         , width:50 },
      {prop:"detectedOn"  , name: "Detected On", width:170},
      {prop:"policyId"    , name: "Policy ID"  , width:75 },
      {prop:"policyType"  , name: "Policy"     , width:205},
      {prop:"status"      , name: "Status"     , width:90, cellTemplate: this.statusCellTpl },
      {prop:"severity"    , name: "Severity"   , width:75, cellTemplate: this.severityCellTpl },
      {prop:"customerName", name: "Customer"   , width:90},
      {prop:"platformName", name: "Platform"   , width:110},
      {prop:"platformUser", name: "Offending User", width:110},
      //{prop:"ownerEmail"  , name: "Owner Email", width:30},
      {prop:"ownerName"   , name: "Owner"      , width:200}
    ];

  }

/*
  public columns = [
      {name: "Incident"   },
      {prop: "pid", name: "Policy ID"  },
      {prop: "don", name: "detectedOn"},
  ];

  public rows = [
    {"incident":"I1",  "pid":"P1", "don":"11"},
    {"incident":"I2",  "pid":"P2", "don":"22"},
    {"incident":"I3",  "pid":"P3", "don":"33"}
  ];
*/

  getIncidentData() {
      var dateFormat = {year: 'numeric', month: 'short', day: 'numeric' ,hour:"2-digit",minute:"numeric"};
      this.incidentService.getIncidents(0,10000).subscribe((data) => {
        this.rows = data;
      });

      this.incidentService.getIncidentsBySeverity().subscribe((data) => {
          this.incidentBySeverityChartData = data;
      });
  }




}
