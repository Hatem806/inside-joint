import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../app/pages/products/products.component'
import { ProductComponent } from '../app/pages/products/product/product.component'
import { ConferencesComponent } from '../app/pages/conferences/conferences.component'
import { HomeComponent } from '../app/pages/home/home.component'
import { AboutUsComponent } from '../app/pages/about-us/about-us.component'


const routes: Routes = [
  { path: "products", component: ProductsComponent },
 // { path: "products/:productId", component: ProductComponent },
  { path: "conferences", component: ConferencesComponent },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutUsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
