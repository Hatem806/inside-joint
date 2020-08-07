import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { IEventsResponse } from '../models/responses/EventsResponse';
import { IEventResponse } from '../models/responses/EventResponse';
import { IEvent } from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService
{
  _endPoint: String = "/api/v1/events";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any>

  {
    return this.http.get(`${environment.baseUrl}/${this._endPoint}`+'');
  }

  public getProduct(productId): Observable<any> {
    const params = new HttpParams().set('id','productId'  )
    return this.http.get(`${environment.baseUrl}/${this._endPoint}`, { params } );
  }

}
