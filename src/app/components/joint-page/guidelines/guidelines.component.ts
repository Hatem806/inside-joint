import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.css']
})
export class GuidelinesComponent implements OnInit {

  jointName : string
  guidelines2DArray = [] ;

  guidelines = [] ;
  twoElementsARow : boolean ;
  innerWidth : any ;
  constructor(public apiService : ApiService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.jointName = data.bodyPart
     })

    this.innerWidth = window.innerWidth ;

     this.apiService.getAssetsService().getGuidelines().subscribe( data => {
      console.log(data) ;

      this.guidelines = data.assets

      this.init2DArray() ;

      if( this.innerWidth < 1024 ){
        this.twoElementsARow = true ;
        this.init1DArrayThatIsActually2D()
      }
      else{
        this.twoElementsARow = false ;
      }

      console.log(this.guidelines2DArray)
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


  goToGuidelineLink(element){
    window.location.href = this.apiService.getAssetsService().getGuidelinesURL() + element.path ;
    console.log(window.location.href)
  }
  init2DArray(){
    console.log(this.guidelines)
    this.guidelines2DArray = []
    let row ;
    for(let i =0; i< this.guidelines.length ; i++){
      row = [] ;
      row.push(this.guidelines[i]);
      if(this.guidelines[i+1]){
        row.push(this.guidelines[i+1]);
      }
      this.guidelines2DArray.push(row) ;
      i++ ;
    }
  }
  init1DArrayThatIsActually2D(){
    let arr = [] ;
    for(let i =0 ; i< this.guidelines2DArray.length ; i++){
      arr.push([this.guidelines2DArray[i][0]]) ;
      arr.push([this.guidelines2DArray[i][1]]) ;
    }
    this.guidelines2DArray=  arr
  }
}



