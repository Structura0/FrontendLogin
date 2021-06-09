import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders,} from '@angular/common/http';
import { _global } from './_global';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiUsuarioService {
  url: string;
  public identity;
  public token;

  constructor(
    private http: HttpClient
  ) { 
    this.url = _global.url;
  }

  private extractData(res: Response){
    let body = res;
    return body || {};
  }
  Post(user, gettoken= null): Observable<any> {
    if(gettoken != null){
      user.gettoken = gettoken;
  }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         
      })
    };

    return this.http.post<any>(this.url + 'user/login', JSON.stringify(user), httpOptions).pipe();
  }

  signup(user, gettoken= null) : Observable<any>{
    if(gettoken != null){
      user.gettoken = gettoken;
  }
  let params = JSON.stringify(user);
  let headers = new HttpHeaders({'Content-Type': 'application/json'});


 return this.http.post<any>(this.url +'user/login', params, {headers:headers}).pipe();
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity != "undefined") {
        this.identity = identity;

    }else{
      this.identity = null;
    }

    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');

    if(token != "undefinded"){
      this.token = token;
    }else {
      this.token = null;
    }

    return this.token;

  }

}
