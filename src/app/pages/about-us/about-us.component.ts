import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  changeQuestionIcon : boolean ;
  changeVideoIcon : boolean ;
  changePdfIcon : boolean ;

  pageTitle : string = 'About Us'
  constructor() {
    this.changePdfIcon=false ;
    this.changeQuestionIcon=false ;
    this.changePdfIcon=false ;
  }

  ngOnInit(): void {
  }

}
