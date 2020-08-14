import { Component, OnInit } from '@angular/core';
import { ConferencesService } from 'src/app/services/conferences.service';
import { IQuestion } from 'src/app/models/Question';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  pageTitle = "Conferences"
  questions : IQuestion[] ;
  constructor( public apiService: ApiService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      console.log(params)
      this.apiService.getConferenceServices().getConference(params.conferenceId).subscribe( data => {
       console.log(data);
        this.questions = data.event.questions ;

    })

    })
  }

}
