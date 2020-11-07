import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JointService {

  public jointName ;
  public jointNameEn ;
  private static _endPoint: string = "v1/joints";
  public jointsImagePath = '../../../assets/joints/' ;

  constructor(private http: HttpClient) { }


}
