import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from '../app/pages/products/products.component';
import { ConferencesComponent } from '../app/pages/conferences/conferences.component';
import { AboutUsComponent } from '../app/pages/about-us/about-us.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { ProductComponent } from '../app/pages/products/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConferencesComponent,
    AboutUsComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
