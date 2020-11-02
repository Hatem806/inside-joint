import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  jointName : string
  recommendations2DArray = [] ;

  recommendations = [] ;
  twoElementsARow : boolean ;
  innerWidth : any ;
  constructor(public apiService : ApiService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.jointName = data.bodyPart
     })

    this.innerWidth = window.innerWidth ;

     this.apiService.getAssetsService().getRecommendations().subscribe( data => {
      console.log(data) ;

      this.recommendations = data.assets

      this.init2DArray() ;

      if( this.innerWidth < 1024 ){
        this.twoElementsARow = true ;
        this.init1DArrayThatIsActually2D()
      }
      else{
        this.twoElementsARow = false ;
      }

      console.log(this.recommendations2DArray)
    })
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  if (this.innerWidth <=1024) {
    this.twoElementsARow = false ;
   this.init2DArray() ;
  } else {
    this.twoElementsARow = true ;
    this.init1DArrayThatIsActually2D() ;
  }
}


  goToRecommendationLink(element){
    window.location.href = this.apiService.getAssetsService().getRecommendationsURL() + element.path ;
    console.log(window.location.href)
  }
  init2DArray(){
    console.log(this.recommendations)
    this.recommendations2DArray = []
    let row ;
    for(let i =0; i< this.recommendations.length ; i++){
      row = [] ;
      row.push(this.recommendations[i]);
      if(this.recommendations[i+1]){
        row.push(this.recommendations[i+1]);
      }
      this.recommendations2DArray.push(row) ;
      i++ ;
    }
  }
  init1DArrayThatIsActually2D(){
    let arr = [] ;
    for(let i =0 ; i< this.recommendations2DArray.length ; i++){
      arr.push([this.recommendations2DArray[i][0]]) ;
      arr.push([this.recommendations2DArray[i][1]]) ;
    }
    this.recommendations2DArray=  arr
  }
}



