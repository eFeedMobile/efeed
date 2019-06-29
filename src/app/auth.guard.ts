import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServicsService } from './login/login-servics.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginservice: LoginServicsService, private router: Router) {

  }
  canActivate(): boolean {
    if (this.loginservice.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
