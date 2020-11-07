import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './api.service';
import { JointService } from './joints.service';



@Injectable({
  providedIn: 'root'
})
export class LanguagesService
{
  lang : String;
  constructor( public translate : TranslateService ,private jointService : JointService) { }

  changeLang(language : string ){
    localStorage.setItem('locale', language) ;
    this.translate.use(language) ;
    this.lang = language ;
    console.log(language)
    this.translate.get(this.jointService.jointNameEn.toLowerCase()).subscribe( result => {
      console.log(result)
      this.jointService.jointName = result ;
    })
  }


}
