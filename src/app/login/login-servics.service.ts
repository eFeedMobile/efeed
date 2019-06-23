import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginClass } from '../login-class';



@Injectable({
  providedIn: 'root'
})
export class LoginServicsService {
   _url = 'http://localhost:3000/loginvalidate/:loginData';
  constructor(private _http: HttpClient ) { }

  getvalidatelogin(logindata: LoginClass) {
    console.log('serviced call' + logindata );
    return this._http.post<any>(this._url, logindata);
  }

}
