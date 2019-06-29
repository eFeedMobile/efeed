import { Component } from '@angular/core';
import { LoginServicsService } from './login/login-servics.service';

class Event {
  constructor(public title: any) {}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eFeedWebClient';
  constructor(public authService: LoginServicsService) {}
}
