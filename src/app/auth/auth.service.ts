import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {  } from 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable()
export class AuthService {
  isLogin
  // productionURL
  //private link = 'http://ec2-54-145-198-134.compute-1.amazonaws.com:3000';
  private link = 'http://localhost:3000';
  
  private userUrl = this.link + '/user';
  private loginUrl =  this.link + '/user/login';
  private tokenUrl =  this.link + '/user/tokenCheck';

  // register a new user
  signup(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.userUrl, body, {headers: headers})
        .map((response: Response)=> response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  // login user.  returns the json web token for the user.
  login(user: User){    
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.loginUrl, body, {headers: headers})
        .map((response: Response)=> response.json())
        .catch((error: Response) => Observable.throw(error.json()))
  }
  
  // clear json web token on logout
  logout() {
    localStorage.removeItem("token");
    localStorage.clear();
  }

  checkToken() {    
    var body = localStorage;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.tokenUrl, body, {headers: headers})
        .map((response: Response)=> response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  constructor(private http: Http) { }

}
