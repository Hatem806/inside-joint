import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JointService {
  private static _endPoint: string = "v1/joints";
  public jointName : string  ;
  public jointImageSrc : string ;

  constructor(private http: HttpClient) { }


}
