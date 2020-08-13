import { ProductsService } from './products.service';
import { ConferencesService } from './conferences.service';
import { Injectable } from '@angular/core';
import { AssetsService } from './assets.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private productService : ProductsService, private conferenceService : ConferencesService,
    private assetsService : AssetsService) {}

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
}
