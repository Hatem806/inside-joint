import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { IAnswer } from '../models/Answer';


@Injectable({
  providedIn: 'root'
})
export class questionsAnswersService
{
  _endPoint: String = "api/v1/submissions/events";
  answers : IAnswer[] = [];
  constructor(private http: HttpClient) {
   }

  public addSubmission(eventId : string, submission: IAnswer[]){
      return this.http.patch<IAnswer>(`${environment.baseUrl}/${this._endPoint}/${eventId}`, submission);
 }



}
