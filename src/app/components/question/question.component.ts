import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() title : string  ;
  @Input() questionNumber : number ;
  @Input() answers : [] ;
  @Input() answerName : string ;

  constructor() { }

  ngOnInit(): void {
  }

}
