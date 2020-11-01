import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from '@angular/router';
import { SessionStorageService } from '../../services/session-storage.service';
import {IUserResponse} from '../../models/responses/UserResponse'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy
{
  public email: string;
  private user:IUserResponse;
  public errorMessage:string;
  public error :boolean

  innerWidth : any = window.innerWidth ;

  constructor(  public ApiService: ApiService, public router: Router,public SessionStorageService:SessionStorageService)
  {


    document.onkeypress = (e) => {
      if (e.keyCode== 13 && (router.url == "/"  || router.url == "/login")) {

          this.login();
      }
  };
  }

  ngOnInit()
  {

  }

  ngOnDestroy()
  {

  }




  public login(): void
  {

    if(this.email == null || this.email == "")
    {
      this.error=true
      if(this.ApiService.getLangService().lang == 'en'){
        this.errorMessage="Email address is required"
      }
      else{
        this.errorMessage = "Adresse e-mail est nécessaire"
      }
    }
else{
    this.ApiService.getAuthenticationService().login(this.email).subscribe(data => {

      console.log(data)

      if(data.success == true)
      {
        this.ApiService.getAuthenticationService().setUserId(data.user._id) ;
        this.SessionStorageService.saveUserSession(this.email);
        this.router.navigateByUrl('/home');
      }
      else
      {
        this.error=true
        this.errorMessage="Invalid email"
      }
    })
  }
  }
register(){
  this.router.navigateByUrl('/signup');
}


}
