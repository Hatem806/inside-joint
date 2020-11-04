import { ProductsService } from './products.service';
import { ConferencesService } from './conferences.service';
import { Injectable } from '@angular/core';
import { AssetsService } from './assets.service';
import { questionsAnswersService } from './questionsAnswers.service';
import { UsersService } from './users.service';
import { AuthenticationService } from './authentication.service';
import { JointService } from './joints.service';
import { LanguageService } from 'typescript';
import { LanguagesService } from './languages.service';
import { CompaniesService } from './companies.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private productService : ProductsService, private conferenceService : ConferencesService,
    private assetsService : AssetsService, private questionsAnswersService : questionsAnswersService,
    private authenticationService: AuthenticationService,private usersService: UsersService,
    private jointService : JointService ,private langService : LanguagesService ,private companiesService : CompaniesService) {}

  public getProductsService(): ProductsService
  {
    return this.productService;
  }
  public getConferenceServices() : ConferencesService
  {
    return this.conferenceService;
  }
  public getAssetsService() : AssetsService
  {
    return this.assetsService;
  }
  public getQuestionsAnswersService() : questionsAnswersService
  {
    return this.questionsAnswersService;
  }

  public getUsersService(): UsersService
  {
    return this.usersService;
  }



  public getAuthenticationService(): AuthenticationService
  {
    return this.authenticationService;
  }

  public getJointService(): JointService
  {
    return this.jointService ;
  }

  public getLangService(): LanguagesService
  {
    return this.langService ;
  }
  public getCompaniesService() : CompaniesService
  {
    return this.companiesService ;
  }
}
