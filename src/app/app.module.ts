import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from '../app/pages/products/products.component';
import { ConferencesComponent } from '../app/pages/conferences/conferences.component';
import { AboutUsComponent } from '../app/pages/about-us/about-us.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ConferenceComponent } from './pages/conferences/conference/conference.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsComponent } from './pages/conferences/questions/questions.component';
import { ThankYouComponent } from './pages/conferences/thank-you/thank-you.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConferencesComponent,
    AboutUsComponent,
    HomeComponent,
    HeaderComponent,
    ConferenceComponent,
    QuestionComponent,
    QuestionsComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
