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
  pageTitle="Products"
  allProducts : IProduct[]
  products: IProduct[]
  lastProductIndex : number
  firstProductIndex : number
  constructor( public apiService : ApiService , private router : RouterModule ) { }

  ngOnInit(): void {
    this.apiService.getProductsService().getProducts().subscribe( data => {
      console.log(data);
      this.products = data.products.slice(0,4) ;
      this.allProducts = data.products ;
      this.firstProductIndex=0 ;
      this.lastProductIndex=3 ;

    })


  }
  goToLink(link){
    window.location.href = link ;
  }
  goToVideoLink(product){
    window.location.href = this.apiService.getAssetsService().getVideosUrl() + product.videoPath ;
  }
  onRightArrow(){

    if(this.allProducts[this.lastProductIndex+4]){
     this.products= this.allProducts.slice(this.lastProductIndex,this.lastProductIndex+4);
     this.lastProductIndex+=4 ;
     this.firstProductIndex+=4 ;
    }else{
      this.products= this.allProducts.slice(this.allProducts.length-4,this.allProducts.length)
      this.lastProductIndex= this.allProducts.length-1 ;
      this.firstProductIndex= this.lastProductIndex-4 ;
    }
  }
  onLeftArrow(){
    if(this.allProducts[this.firstProductIndex-4]){
      this.products= this.allProducts.slice(this.firstProductIndex-4,this.lastProductIndex+4)
      this.firstProductIndex-=4 ;
      this.lastProductIndex-=4 ;
     }else{
       this.products= this.allProducts.slice(0,4)
       this.firstProductIndex=0 ;
      this.lastProductIndex=3 ;
     }
  }

}
