import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(  private router : RouterModule ) { }

  ngOnInit(): void {
    // this.apiService.getProductsService().getProducts().subscribe( products => {
    //   console.log(products);
    // })

  }

}
