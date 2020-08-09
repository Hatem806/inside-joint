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

 conferences:IEvent[]
  constructor( public apiService : ApiService , private router : RouterModule ) { }

  ngOnInit(): void {
    this.apiService.getconferenceServices().getConferences().subscribe( data => {
      console.log(data);
      this.conferences = data.events.slice(0,4) ;
    })

  }
  goToLink(link){
    window.location.href = link ;
  }
}
