import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
//import this
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-manuals',
  templateUrl: './manuals.component.html',
  styleUrls: ['./manuals.component.css'],
})
export class ManualsComponent implements OnInit {
  jointName: string;
  jointImageSrc: string;
  title: string;
  htmlFile;
  htmlData;
  safeHtmlContent: string;
  data;
  constructor(
    public apiService: ApiService,
    public route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.jointName = data.bodyPart;
      this.jointImageSrc =
        this.apiService.getJointService().jointsImagePath + data.imgSrc;
      console.log(this.jointImageSrc);
    });

    this.data = this.apiService.getAssetsService().chosenManual;
    console.log(this.data);
    this.htmlFile = this.data.path;
    this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.htmlFile);
    // this.apiService.getAssetsService().getManual( data.assets[3].path).subscribe( response =>{
    //  console.log(response)
    //   this.htmlFile = response ;
    //   this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.htmlFile);
    // //  this.safeHtmlContent = SafeHtmlPipe.
    // })

    this.title = this.data.title;
  }
}
