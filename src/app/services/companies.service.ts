import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompanyResponse } from '../models/responses/CompanyResponse';
import { environment } from 'src/environments/environment';
import { ICompany } from '../models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private static _endPoint: string = "api/v1/companies";
  constructor(private http: HttpClient) { }



  public get(): Observable<ICompanyResponse>
  {
    return this.http.get<ICompanyResponse>(`${environment.baseUrl}/${CompaniesService._endPoint}`);
  }

  public create(company: ICompany, videoFile: File, documentFile: File): Observable<ICompanyResponse>
  {
    let formData = new FormData();
    formData.append("name", company.name);
    formData.append("aboutUs", company.aboutUs);

    if(documentFile)
    {
      formData.append("document", documentFile);
    }

    if(videoFile)
    {
      formData.append("video", videoFile);
    }
    
    return this.http.post<ICompanyResponse>(`${environment.baseUrl}/${CompaniesService._endPoint}`, formData);
  }


  public update(company: ICompany, videoFile: File, documentFile: File): Observable<ICompanyResponse>
  {
    let formData = new FormData();
    formData.append("name", company.name);
    formData.append("aboutUs", company.aboutUs);

    if(documentFile)
    {
      formData.append("document", documentFile);
    }

    if(videoFile)
    {
      formData.append("video", videoFile);
    }
    
    return this.http.patch<ICompanyResponse>(`${environment.baseUrl}/${CompaniesService._endPoint}/${company._id}`, formData);
  }
}
