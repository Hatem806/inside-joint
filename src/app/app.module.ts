import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './Pages/login/login.component';
import {SignupComponent} from'./Pages/signup/signup.component'
import {SignupDataComponent} from'./Pages/signup/signup-data/signup-data.component';
import {Data} from './models/Data'

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
    ThankYouComponent,
    SignupComponent,
    SignupDataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe,Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
