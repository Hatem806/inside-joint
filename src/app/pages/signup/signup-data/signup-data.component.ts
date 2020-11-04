import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from "../../../services/api.service";
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from '../../../services/session-storage.service';
import {IUser} from '../../../models/User'
import {Data} from '../../../models/Data'


@Component({
  selector: 'app-signup-data',
  templateUrl: './signup-data.component.html',
  styleUrls: ['./signup-data.component.css']
})
export class SignupDataComponent implements OnInit, OnDestroy
{
  public email: string ;
  public lastName:string;
  public firstName:string;
  public country:string;
  public city :string;
  public workPlace :string;
  public contactNumber :string;
  private user
  private date:Date
  public errorMessage:string;
  public error :boolean

  termsAndConditions : boolean  = false ;

  innerWidth : any = window.innerWidth



  constructor(  private data:Data,public ApiService: ApiService, public router: Router,public SessionStorageService:SessionStorageService,public route: ActivatedRoute)
  {



  }

  agreeToTermsAndConditions(){
    this.termsAndConditions = !this.termsAndConditions ;
  }
  ngOnInit()
  {



this.country='Egypt'


  }

  ngOnDestroy()
  {

  }


  goBack()
  {
    console.log("hello")
    window.history.back();
  }

  public signUp(): void
  {
    console.log(this.city)
    if(this.city == undefined || this.firstName == undefined || this.lastName == undefined || this.email == undefined || this.country == undefined ||
      this.workPlace == undefined  || this.contactNumber == undefined ){
        this.error = true ;
        this.errorMessage = "Please fill all fields"
        return ;
      }

      if(!this.termsAndConditions){
        this.error = true ;
        this.errorMessage = "Please confirm your agreement to our terms and conditions" ;
        return ;
      }
    this.date= new Date();
    console.log(this.contactNumber)
    this.user={city:this.city,firstname:this.firstName,lastname:this.lastName,email:this.email,mobileNumber:this.contactNumber
      ,country:this.country,language:null,workplace:this.workPlace,isUsingIAHA:this.data.storage.isUsingIaha,whichJoints:this.data.storage.whichJoints,rangeOfInjectionsPerMonth:this.data.storage.rangeOfInjectionsPerMonth,createdAt:this.date,updatedAt:this.date}
      console.log(this.user)
      this.ApiService.getUsersService().create(this.user).subscribe(data => {
        console.log(data)
      if(data.success == true )
      {
        this.ApiService.getAuthenticationService().login(this.email).subscribe(data => {


            if(data.success == true)
            {

              this.SessionStorageService.saveUserSession(this.email);
              this.router.navigateByUrl('/home');
            }
            else
            {
              this.error=true
              this.errorMessage="You already have an account"
            }
          })
      }
      else
      {
        this.error=true
        this.errorMessage="You already have an account"
      }
    })
  }



}
