import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginClass } from '../login-class';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { LoginComponent } from './login.component';



/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()

export class LoginServicsService {
    url = 'http://localhost:3000/loginvalidate/loginData';
    url2 = 'http://localhost:3000/login';
    feedDiveurl = 'http://localhost:3000/feedDevice';

  constructor(private http: HttpClient, private router: Router  ) { }

  getTestData(testdata) {
    // console.log('serviced call' + JSON.stringify(logindata) );
     return  this.http.post<any>(this.url2, testdata);
   }


   getFeedDebiceData(deviceId) {
     return  this.http.post<any>(this.feedDiveurl, deviceId);
   }


  getvalidatelogin(logindata: LoginClass) {
   // console.log('serviced call' + JSON.stringify(logindata) );
    return  this.http.post<LoginClass>(this.url, logindata);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  loggedIn() {
    return !! localStorage.getItem('token');
  }
  getToken() {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
    
  }
}
