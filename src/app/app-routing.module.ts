import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../app/pages/products/products.component'
import { ProductComponent } from '../app/pages/products/product/product.component'
import { ConferencesComponent } from '../app/pages/conferences/conferences.component'
import { HomeComponent } from '../app/pages/home/home.component'
import { AboutUsComponent } from '../app/pages/about-us/about-us.component'
import { ConferenceComponent} from '../app/pages/conferences/conference/conference.component'
import { LoginComponent } from './Pages/login/login.component';
import {SignupComponent} from'./Pages/signup/signup.component'
import {SignupDataComponent} from'./Pages/signup/signup-data/signup-data.component';


const routes: Routes = [
  { path: "products", component: ProductsComponent },
 { path: "products/:productId", component: ProductComponent },
  { path: "conferences", component: ConferencesComponent },
  { path: "conferences/:conferenceId", component: ConferenceComponent},
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutUsComponent },
  {path:'signup',component:SignupComponent},
  {path:'signup-data',component:SignupDataComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
