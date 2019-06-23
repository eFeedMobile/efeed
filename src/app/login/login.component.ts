import { Component, OnInit } from '@angular/core';
import { LoginClass } from '../login-class';
import { LoginServicsService } from './login-servics.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public userloginModel = new LoginClass ('LoginId', 'Password');
  public submited = false;

  constructor(private loginServicsService: LoginServicsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submited = true;
    console.log(this.userloginModel);
// tslint:disable-next-line: max-line-length
    this.loginServicsService.getvalidatelogin(this.userloginModel).subscribe(
// tslint:disable-next-line: no-shadowed-variable
      data => console.log('Data', data), error => console.log('error', error)
      );
    console.log('data pushed');
  }
}
