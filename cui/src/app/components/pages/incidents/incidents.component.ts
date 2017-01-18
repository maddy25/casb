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
  expanded = {};
  timeout: any;

  //ngx-Chart Variables
  single: any[] = [];
  view: any[] = [700, 150];
  colorScheme = { domain: ['#CE1126', '#FFCC00','#AAAAAA','#005d84']};

  constructor( private router: Router, private incidentService: IncidentService) { }

	ngOnInit() {
    this.getIncidentData();
    this.columns=[
      {prop:"incidentId"  , name: "ID"         , width:50 },
      {prop:"detectedOn"  , name: "Detected On", width:170},
      {prop:"policyId"    , name: "Policy ID"  , width:80 },
      {prop:"policyType"  , name: "Policy"     , width:205},
      {prop:"status"      , name: "Status"     , width:90, cellTemplate: this.statusCellTpl },
      {prop:"severity"    , name: "Severity"   , width:75, cellTemplate: this.severityCellTpl },
      {prop:"customerName", name: "Customer"   , width:110},
      {prop:"platformName", name: "Platform"   , width:110},
      {prop:"platformUser", name: "Offending User", width:120},
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


  onSelect(event) {
    console.log(event);
  }

/*
  page(offset, limit) {
    this.fetch((results) => {
      this.count = results.length;

      const start = offset * limit;
      const end = start + limit;
      let rows = [...this.rows];

      for (let i = start; i < end; i++) {
        rows[i] = results[i];
      }

      this.rows = rows;
      console.log('Page Results', start, end, rows);
    });
  }
*/
  /*
  page(offset, limit) {
      this.incidentService.getIncidents(0,10).subscribe(
          successResponse => {
            this.rows = successResponse["items"];
            console.log(successResponse["items"]);
          }
      );

  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      //console.log('paged!', event);
    }, 100);
  }
  */
  getIncidentData() {
      var dateFormat = {year: 'numeric', month: 'short', day: 'numeric' ,hour:"2-digit",minute:"numeric"};
      this.incidentService.getIncidents(0,10000).subscribe(
        resp => {
          this.rows = resp["items"].map(function(v, i, a){
            var newRow = Object.assign({}, v);
            newRow.detectedOn  = new Date(newRow.detectedOn).toLocaleDateString("en-US",dateFormat);
            switch (newRow.status) {
              case "IN_PROGRESS":
                newRow.status = "Progress"
                break;
              case "NEW":
                newRow.status = "New"
                break;
              case "DISMISSED":
                newRow.status = "Dismissed"
                break;
              case "RESOLVED":
                newRow.status = "Resolved"
                break;
            }
            return newRow;
          });
          //console.log(successResponse["items"]);
        }
      );

      this.incidentService.getIncidentsBySeverity().subscribe(
        resp => {
          this.single = [
            {"name":"critical", "value":resp["content"]["critical"]},
            {"name":"alert"   , "value":resp["content"]["alert"]   },
            {"name":"warning" , "value":resp["content"]["warning"] },
            {"name":"info"    , "value":resp["content"]["info"]    }
          ]
        }
      );
  }




}
