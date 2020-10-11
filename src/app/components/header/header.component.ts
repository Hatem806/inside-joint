import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() pageName: string;
  @Input() pageImageSource1: string;
  @Input() pageImageSource2: string;

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
