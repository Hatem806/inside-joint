import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../app/pages/products/products.component'
import { ConferencesComponent } from '../app/pages/conferences/conferences.component'
import { HomeComponent } from '../app/pages/home/home.component'
import { AboutUsComponent } from '../app/pages/about-us/about-us.component'
import { ConferenceComponent } from '../app/pages/conferences/conference/conference.component'
import { QuestionsComponent } from '../app/pages/conferences/questions/questions.component'
import { ThankYouComponent } from '../app/pages/conferences/thank-you/thank-you.component'

const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "conferences", component: ConferencesComponent },
  { path: "conferences/:conferenceId", component: ConferenceComponent},
  { path: "conferences/:conferenceId/questions", component: QuestionsComponent},
  { path: "conferences/:conferenceId/questions/thank-you", component: ThankYouComponent},
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutUsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
