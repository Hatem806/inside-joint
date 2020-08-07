import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( public productService : ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( products => {
      console.log(products);
    })

  }

}
