import { ProductsService } from './products.service';
import { ConferencesService } from './conferences.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private productService : ProductsService, private conferenceService : ConferencesService) {}

  public getProductsService(): ProductsService
  {
    return this.productService;
  }
  public getconferenceServices() : ConferencesService
  {
    return this.conferenceService;
  }
}
