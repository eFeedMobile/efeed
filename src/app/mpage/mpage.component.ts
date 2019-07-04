import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mpage',
  templateUrl: './mpage.component.html',
  styleUrls: ['./mpage.component.css']
})
export class MpageComponent implements OnInit {

  public userfeedHappy = true; // for main dive for getting feed
  public userHappy = false; // for happy feed say thanks
  public usernewfeed = false; // for showing new feed option
  public userfeedImprove = false; // for improve feed
  public userFeedImpdata = [
    {
      id: 1,
      description: 'No water in tab',
    },
    {
      id: 2,
      description: 'Foul Smell',
    },
    {
      id: 3,
      description: 'Not Clean',
    },
    {
      id: 4,
      description: 'Light not working',
    },
    {
      id: 5,
      description: 'Paper Towel',
    },
    {
      id: 6,
      description: 'WC not clean',
    },

  ];


  constructor() { }

  ngOnInit() {
  }

  onSubmitHappy() {

    this.userfeedHappy = false;
    this.usernewfeed = true;
    this.userHappy = true;

  }

  onSubmitImprove() {
   this.userfeedHappy = false;
   this.userfeedImprove = true;

  }

  onSubmitImproveSelected(selSeldata) {
     console.log(selSeldata);
     this.userfeedImprove = false;
     this.userHappy = true;
     this.usernewfeed = true;
   }

  onNewFeed() {

    this.userHappy = false;
    this.userfeedHappy = true;
    this.usernewfeed = false;
  }

}
