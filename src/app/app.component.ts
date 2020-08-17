import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insidejoint-web-application-angular';


  routesMap = [];

  currentRoute: string = "";
  constructor( public router: Router,public ApiService:ApiService)
  {


    this.routesMap['/products'] = "Products";
    this.routesMap['/home'] = "Home";
    this.routesMap['/conferences'] = "Conferences";
    this.routesMap['/aboutus'] = 'About Us';
    this.routesMap['/conferences/:conferenceId'] = 'Conference'


    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd)
      {
        if(this.routesMap[this.router.url])
        {
          this.currentRoute = this.routesMap[this.router.url];
        }
      }


    });

  }
  logout(){
    this.ApiService.getAuthenticationService().logout();
    this.router.navigateByUrl('');
  }
}
