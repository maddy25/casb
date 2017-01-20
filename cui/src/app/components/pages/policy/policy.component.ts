import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { PolicyService } from '../../../api/policy.service';
import { Router } from '@angular/router';


@Component({
	selector: 's-policy-pg',
	templateUrl: './policy.component.html',
  styleUrls: [ './policy.scss'],
})

export class PolicyComponent implements OnInit {

 @ViewChild('conditionTpl') conditionTpl: TemplateRef<any>;
 @ViewChild('stateTpl') stateTpl: TemplateRef<any>;
 @ViewChild('severityTpl') severityTpl: TemplateRef<any>;

  //ngx-Datatable Variables
  columns:any[];
  rows:any[];

  constructor( private router: Router, private policyService: PolicyService) { }

	ngOnInit() {
    this.getPolicyData();
    this.columns=[
      {prop:"policyId"    , name: "ID"         , width:70  },
      {prop:"policyType"  , name: "Policy Type", width:220 },
      {prop:"policyState" , name: "State"      , width:80  , cellTemplate: this.stateTpl     },
      {prop:"severity"    , name: "Severity"   , width:90  , cellTemplate: this.severityTpl  },
      {prop:"conditions"  , name: "Rules"      , width:550 , cellTemplate: this.conditionTpl }
    ];
  }

  getPolicyData() {

      this.policyService.getPolicies().subscribe(policyData => {
          this.rows = policyData;
      });
  }



}
