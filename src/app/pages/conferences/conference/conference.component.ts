import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule } from '@angular/router';
import { IEvent } from 'src/app/models/Event';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  chosenConference : IEvent
  displayedStartDate : String ;
  displayedEndDate : String ;
  constructor( public apiService : ApiService , private router : RouterModule, public datepipe : DatePipe ) { }

  ngOnInit(): void {
    this.chosenConference= this.apiService.getconferenceServices().chosenConference ;
    console.log(this.chosenConference)
    this.apiService.getconferenceServices().getConference(this.chosenConference._id).subscribe( data => {

      this.displayedStartDate= this.datepipe.transform(this.chosenConference.startDate,'dd MM yyyy') ;
      this.displayedEndDate= this.datepipe.transform(this.chosenConference.endDate,'dd MM yyyy') ;


    })
  }


}
