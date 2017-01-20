import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams,RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TranslateService } from './translate.service';

@Injectable()
export class PolicyService {
    public token: string;

    constructor(private http: Http,  @Inject('api') private api, private translate:TranslateService) {  //refer fo api value in app.module.ts
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    getPolicies(): Observable<any> {
      let me = this;
      let options = new RequestOptions({
          method : RequestMethod.Get,
          url    : this.api + 'cas/policies'
      });

      let policyList = new Subject<any>(); // Will use this subject to emit data that we want

      this.http.request(new Request(options))
        .map(res => res.json())
        .catch((err:Response) => {
            console.log("Error === >" + err.status  );
            return Observable.throw(err) ;
        })
        .subscribe(jsonResp => {
            let returnObj = jsonResp.items.map(function(v, i, a){
                let newRow = Object.assign({}, v, {
                  policyState: me.translate.getPolicyState(v.policyState),
                  severity   : me.translate.getSeverity(v.severity)
                });
                return newRow;
            });
            policyList.next(returnObj); // policyList is a Subject and emits an event thats being listened to by the components
        });
        return policyList;
    }

}
