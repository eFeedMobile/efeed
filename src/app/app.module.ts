import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { LoginServicsService } from './login/login-servics.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomepublicComponent } from './homepublic/homepublic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageErrorComponent,
    HomepageComponent,
    HomepublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoginServicsService, AuthGuard, HomepageComponent,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
