import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { RouterModule } from '@angular/router';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[]
  constructor( public apiService : ApiService , private router : RouterModule ) { }

  ngOnInit(): void {
    this.apiService.getProductsService().getProducts().subscribe( data => {
      console.log(data);
      this.products = data.products.slice(0,4) ;

    })

  }
  goToLink(link){
    window.location.href = link ;
  }

}
