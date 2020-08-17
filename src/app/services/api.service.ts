import { ProductsService } from './products.service';
import { ConferencesService } from './conferences.service';
import { Injectable } from '@angular/core';
import { AssetsService } from './assets.service';
import { UsersService } from './users.service';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private productService : ProductsService, private conferenceService : ConferencesService,private authenticationService: AuthenticationService,
    private assetsService : AssetsService,private usersService: UsersService) {}

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

  public getUsersService(): UsersService
  {
    return this.usersService;
  }



  public getAuthenticationService(): AuthenticationService
  {
    return this.authenticationService;
  }

}
