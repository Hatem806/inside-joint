import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class questionsAnswersService
{
  _endPoint: String = "api/v1/submissions";
  constructor(private http: HttpClient) { }

  public addSubmission(eventId : string, submission){
      return this.http.patch(`${environment.baseUrl}/${this._endPoint}/${eventId}`, submission);

  }



}
