import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() pageName: string;
  @Input() pageImageSource1: string;
  @Input() pageImageSource2: string;

  innerWidth = window.innerWidth ;
  constructor(public router: Router, public apiService : ApiService) {}

  ngOnInit(): void {}
}
