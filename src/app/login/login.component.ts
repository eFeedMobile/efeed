import { Component, OnInit } from '@angular/core';
import { LoginClass } from '../login-class';
import { Router} from '@angular/router';
import { LoginServicsService } from './login-servics.service';
import { error } from 'util';
import { JsonPipe } from '@angular/common';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public userloginModel = new LoginClass('LoginId', 'Password');
  public submited = false;
  public errmessage = false;

  constructor(private loginServicsService: LoginServicsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submited = true;
    //console.log(this.userloginModel);
    this.loginServicsService.getvalidatelogin(this.userloginModel).subscribe(
       res => {
        
        localStorage.setItem ('token',res.token );
        console.log(localStorage.getItem('token') );
        this.router.navigate(['/home']);

        },
       err => {
        this.errmessage = true ;
        console.log('error', err) ;
       }
    );
    //console.log('data pushed');
  }
}
