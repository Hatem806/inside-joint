import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule } from '@angular/router';
import { IEventResponse } from 'src/app/models/responses/EventResponse';
import { IEvent } from 'src/app/models/Event';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit {
  pageTitle = "Conferences"
  pageImageSrc = "../../../assets/conferences-photo/man-speaker-eusic-2017-conference.png" ;
  allConferences : IEvent[]
  conferences:IEvent[]
  lastProductIndex : number
  firstProductIndex : number

  constructor( public apiService : ApiService , private router : RouterModule ) { }

  ngOnInit(): void {
    this.apiService.getConferenceServices().getConferences().subscribe( data => {
      console.log(data);
      this.conferences = data.events.slice(0,4) ;
      this.allConferences = data.events ;
      this.firstProductIndex=0 ;
      this.lastProductIndex=3 ;

    })


  }
  goToLink(link){
    window.location.href = link ;
  }
  onRightArrow(){

    if(this.allConferences[this.lastProductIndex+4]){
     this.conferences= this.allConferences.slice(this.lastProductIndex,this.lastProductIndex+4);
     this.lastProductIndex+=4 ;
     this.firstProductIndex+=4 ;
    }else{
      this.conferences= this.allConferences.slice(this.allConferences.length-4,this.allConferences.length)
      this.lastProductIndex= this.allConferences.length-1 ;
      this.firstProductIndex= this.lastProductIndex-4 ;
    }
  }
  onLeftArrow(){
    if(this.allConferences[this.firstProductIndex-4]){
      this.conferences= this.allConferences.slice(this.firstProductIndex-4,this.lastProductIndex+4)
      this.firstProductIndex-=4 ;
      this.lastProductIndex-=4 ;
     }else{
       this.conferences= this.allConferences.slice(0,4)
       this.firstProductIndex=0 ;
      this.lastProductIndex=3 ;
     }
  }
  public goToConference(conference): void
  {
    this.apiService.getConferenceServices().chosenConference = conference ;
   // this.router.navigate()

  }

}
