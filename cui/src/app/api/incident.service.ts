import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class IncidentService {
    public token: string;

    constructor(private http: Http,  @Inject('api') private api) {  //refer fo api value in app.module.ts
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    getIncidents(page:number, size:number): Observable<Response> {

      //Create Request Headers
      let headers = new Headers();
      //  headers.append('custom-header', 'custom-value'); // Custom Headers will be blocked by cross-origin policies

      //Create Request URL params
      let params: URLSearchParams = new URLSearchParams();
      params.set('page', page.toString());
      params.set('size', size.toString());

      let options = new RequestOptions({
          headers: headers,
          method : RequestMethod.Get,
          url    : this.api + 'cas/incidents',
          search:params
      });

      return this.http.request(new Request(options))
        .map(res => res.json())
        .catch((err:Response) => {
            console.log("Error === >" + err.status  );
            return Observable.throw(err) ;
        });
    }



    getIncidentsBySeverity(): Observable<Response> {

      let options = new RequestOptions({
          method : RequestMethod.Get,
          url    : this.api + 'cas/incidents-by-severity'
      });

      return this.http.request(new Request(options))
        .map(res => res.json())
        .catch((err:Response) => {
            console.log("Error === >" + err.status  );
            return Observable.throw(err) ;
        });
    }



}
