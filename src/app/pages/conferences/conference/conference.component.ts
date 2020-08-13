import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/Event';
import { DatePipe } from '@angular/common';
import { IEventResponse } from 'src/app/models/responses/EventResponse';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  chosenConference : IEvent
  displayedStartDate : String ;
  displayedEndDate : String ;
  conference_id
  constructor( public apiService : ApiService , private router : RouterModule,
    public datepipe : DatePipe, private route : ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe( params =>{
      console.log(params)
      this.apiService.getConferenceServices().getConference(params.conferenceId).subscribe( data => {
       console.log(data);
        this.chosenConference = data.event ;
        this.displayedStartDate= this.datepipe.transform(data.event.startDate,'dd MM yyyy') ;
        this.displayedEndDate= this.datepipe.transform(data.event.endDate,'dd MM yyyy') ;


    })

    })
  }


}
