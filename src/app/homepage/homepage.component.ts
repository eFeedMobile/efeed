import { Component, OnInit } from '@angular/core';
import { LoginClass } from '../login-class';
import { Router} from '@angular/router';
import { LoginServicsService } from '../../app/login/login-servics.service';
import { error } from 'util';
import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
deviceData = [];


  constructor(private loginServicsService: LoginServicsService, private router: Router) { }

  ngOnInit() {
    this.loginServicsService.getFeedDebiceData('deviceid')
      .subscribe(
        res => this.deviceData = res,
        err => {
        if (err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
      );
  }

  onSubmit() {
    this.loginServicsService.getFeedDebiceData('deviceid')
      .subscribe(
        res => this.deviceData = res,
        err => {
        if (err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
      );

  }

}
