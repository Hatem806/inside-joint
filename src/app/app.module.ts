import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from '../app/pages/products/products.component';
import { ConferencesComponent } from '../app/pages/conferences/conferences.component';
import { AboutUsComponent } from '../app/pages/about-us/about-us.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { ProductComponent } from '../app/pages/products/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { ConferenceComponent } from './pages/conferences/conference/conference.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConferencesComponent,
    AboutUsComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    ConferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
