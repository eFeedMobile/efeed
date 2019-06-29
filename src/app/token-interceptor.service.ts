import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginServicsService } from './login/login-servics.service';

@Injectable()
 export class TokenInterceptorService implements HttpInterceptor  {

  constructor(private injector: Injector){}

  intercept(req, next) {

    let authService = this.injector.get(LoginServicsService);
    console.log(authService.getToken());
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'Bearer ' + authService.getToken())
        //headers: req.headers.set('Authorization', 'Bearer xx.yy.zz' )
        //Authorization: `Bearer ${authService.getToken()}`
      }
    );
    return next.handle(tokenizedReq);
  }
}
