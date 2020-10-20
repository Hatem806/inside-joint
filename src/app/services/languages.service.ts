import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { TranslateService } from '@ngx-translate/core';



@Injectable({
  providedIn: 'root'
})
export class LanguagesService
{
  lang : String;
  constructor( public translate : TranslateService) { }

  changeLang(language : string){
    localStorage.setItem('locale', language) ;
    this.translate.use(language) ;
    this.lang = language ;
  }


}
