import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
export class ThankYouComponent implements OnInit {
  pageTitle = 'Thank You';
  pageImageSrc1 =
    '../../../../assets/conferences-photo/man-speaker-eusic-2017-conference.png';
  pageImageSrc2 =
    '../../../../assets/conferences-photo/man-speaker-eusic-2017-conference.png';

  constructor() {}

  ngOnInit(): void {}
}
