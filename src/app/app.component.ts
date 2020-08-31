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
  sidebarColor : string

  companyNameBackground :string
  companyNameColor : string

  listItemBackground :string
  routesMap = [];

  currentRoute: string = "";
  constructor( public router: Router,public ApiService:ApiService)
  {


    this.routesMap['/products'] = "Products";
    this.routesMap['/home'] = "Home";
    this.routesMap['/conferences'] = "Conferences";
    this.routesMap['/aboutus'] = 'About Us';
    this.routesMap['/conferences/:conferenceId'] = 'Conference'
    this.routesMap['/joint'] = 'Joint'
    this.routesMap['/login'] = 'Login'
    this.routesMap['/signup'] = 'SignUp'


    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd)
      {
        if(this.routesMap[this.router.url])
        {
          console.log(this.routesMap[this.router.url])
          if(this.routesMap[this.router.url]=='Joint'){
            this.sidebarColor = "#F2F2F2"
            this.companyNameBackground = "#F2F2F2"
            this.listItemBackground = "#F2F2F2"
            this.companyNameColor = "#005086"
          }
          else{
            this.sidebarColor = "#005086"
            this.companyNameBackground = "#005086"
            this.listItemBackground = "#005086"
            this.companyNameColor = "#F2F2F2"
          }
          this.currentRoute = this.routesMap[this.router.url];

        }
      }


    });

  }
  logout(){
    this.ApiService.getAuthenticationService().logout();
    this.router.navigateByUrl('login');
  }
  goToLogin(){
    this.router.navigateByUrl('login');
  }
}
