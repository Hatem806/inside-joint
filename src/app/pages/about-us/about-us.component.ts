import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  changeQuestionIcon: boolean;
  changeVideoIcon: boolean;
  changePdfIcon: boolean;

  videoPath : string ;
  documentPath : string ;
  aboutUs : string ;

  pageTitle: string = 'About Fidia';
  pageTitleFr : string = 'À propos de Fidia'
  pageImageSrc1 = '../../../assets/about-us-photo/ezgif.com-webp-to-jpg.png';
  pageImageSrc2 = '../../../assets/about-us-photo/ezgif.com-webp-to-jpg-2.png';

  constructor(public apiService: ApiService) {
    this.changePdfIcon = false;
    this.changeQuestionIcon = false;
    this.changePdfIcon = false;
  }

  ngOnInit(): void {
    this.apiService.getCompaniesService().get().subscribe( data =>{
     this.documentPath = data.company.documentPath ;
     this.videoPath = data.company.videoPath ;
     this.aboutUs = data.company.aboutUs ;
    }
      )
  }

  goToVideoLink() {

    window.location.href =
      this.apiService.getAssetsService().getVideosUrl() + this.videoPath;
  }
  goToPdfLink() {
    window.location.href =
      this.apiService.getAssetsService().getDocumentsUrl() + this.documentPath ;
  }
}
