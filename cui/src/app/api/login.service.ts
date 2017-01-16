import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginService {
    public token: string;

    constructor(private http: Http,  @Inject('api') private api) {  //refer fo api value in app.module.ts
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username, password): Observable<Response> {

      /*
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' :'*'
      });
      */

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      //headers.append('Access-Control-Allow-Origin', '*');

      let options = new RequestOptions({ headers: headers }); // Create a request option

      return this.http.post(this.api + 'session', JSON.stringify({ username: username, password: password }), options)
        .map((res:Response) => {
          let token = res.json() && res.json().token;
            console.log("Success === >" + res.status );
            if (token) {
                // set token property
                this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                return res;
            }
            else {
                // return false to indicate failed login
                return res;
            }
        })
        .catch((err:Response) => {
            console.log("Error === >" + err.status  );
            return Observable.throw(err) ;
        });
    }
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}
