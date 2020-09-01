import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joint-header',
  templateUrl: './joint-header.component.html',
  styleUrls: ['./joint-header.component.css']
})
export class JointHeaderComponent implements OnInit {
  @Input() jointName : string ;
  constructor( public router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url.substring(this.router.url.length-7,this.router.url.length))
  }

}
