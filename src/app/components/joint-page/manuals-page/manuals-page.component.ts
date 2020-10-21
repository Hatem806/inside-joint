import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manuals-page',
  templateUrl: './manuals-page.component.html',
  styleUrls: ['./manuals-page.component.css']
})
export class ManualsPageComponent implements OnInit {


  jointName : string
  manuals2DArray = [] ;

  manuals = [] ;
  twoElementsARow : boolean ;
  innerWidth : any ;
  jointImageSrc: string;
  constructor(public apiService : ApiService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.jointName = data.bodyPart ;
      this.jointImageSrc = this.apiService.getJointService().jointsImagePath + data.imgSrc ;
     })

    this.innerWidth = window.innerWidth ;

    this.apiService.getAssetsService().getByPartAndType(this.jointName.toLowerCase(),'manual').subscribe( data => {
      console.log(data) ;

      data.assets.forEach( asset => {

          this.manuals.push(asset) ;
        }) ;

      console.log(this.manuals)

      this.init2DArray() ;

      if( this.innerWidth < 1024 ){
        this.twoElementsARow = true ;
        this.init1DArrayThatIsActually2D()
      }
      else{
        this.twoElementsARow = false ;
      }

      console.log(this.manuals2DArray)
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


  // goToVideoLink(element){
  //   window.location.href = this.apiService.getAssetsService().getVideosUrl() + element.path ;
  // }
  init2DArray(){
    console.log(this.manuals)
    this.manuals2DArray = []
    let row ;
    for(let i =0; i< this.manuals.length ; i++){
      row = [] ;
      row.push(this.manuals[i]);
      if(this.manuals[i+1]){
        row.push(this.manuals[i+1]);
      }
      this.manuals2DArray.push(row) ;
      i++ ;
    }
  }
  init1DArrayThatIsActually2D(){
    let arr = [] ;
    for(let i =0 ; i< this.manuals2DArray.length ; i++){
      arr.push([this.manuals2DArray[i][0]]) ;
      arr.push([this.manuals2DArray[i][1]]) ;
    }
    this.manuals2DArray=  arr
  }
  goToManualsLink( element ){
    window.location.href = this.apiService.getAssetsService().getManualsUrl() + element.path ;
  }

}
