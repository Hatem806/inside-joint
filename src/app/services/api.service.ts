import { ProductsService } from './products.service';
import { ConferencesService } from './conferences.service';
import { Injectable } from '@angular/core';
import { AssetsService } from './assets.service';
import { questionsAnswersService } from './questionsAnswers.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private productService : ProductsService, private conferenceService : ConferencesService,
    private assetsService : AssetsService, private questionsAnswersService : questionsAnswersService) {}

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
}
