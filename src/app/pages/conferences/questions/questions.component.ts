import { Component, OnInit } from '@angular/core';
import { ConferencesService } from 'src/app/services/conferences.service';
import { IQuestion } from 'src/app/models/Question';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  pageTitle = 'Conferences';
  pageImageSrc1 =
    '../../../../assets/conferences-photo/man-speaker-eusic-2017-conference.png';
  pageImageSrc2 =
    '../../../../assets/conferences-photo/man-speaker-eusic-2017-conference.png';

  questions: IQuestion[];
  errorMessage: string = 'Please answer all questions';
  error: boolean = false;

  conferenceId: string;
  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.conferenceId = params.conferenceId;
      this.apiService
        .getConferenceServices()
        .getConference(params.conferenceId)
        .subscribe((data) => {
          console.log(data);
          this.questions = data.event.questions;
        });
    });
  }
  submitResults() {
    const answers = this.apiService.getQuestionsAnswersService().answers;
    console.log(answers);
    console.log(this.questions);
    if (answers.length < this.questions.length) {
      this.error = true;
    } else {
      this.apiService
        .getQuestionsAnswersService()
        .addSubmission(
          this.conferenceId,
          this.apiService.getQuestionsAnswersService().answers
        )
        .subscribe((data) => {
          console.log(data),
            (err) => {
              console.log(err);
            };
        });
      this.router.navigate(['thank-you'], { relativeTo: this.route });
    }
  }
}
