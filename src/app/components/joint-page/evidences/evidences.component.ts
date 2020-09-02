import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evidences',
  templateUrl: './evidences.component.html',
  styleUrls: ['./evidences.component.css']
})
export class EvidencesComponent implements OnInit {

  jointName : string
  documents2DArray = [] ;

  constructor(public apiService : ApiService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.jointName = data.bodyPart
     })
    this.apiService.getAssetsService().getDocuments().subscribe( data => {
      console.log(data) ;
      let documents = [] ;
      data.assets.forEach( document => {
        if(document.bodyPart==this.jointName.toLowerCase()){
          documents.push(document) ;
        }
      })
      console.log(documents)

      let row ;
      for(let i =0; i< documents.length ; i++){
        row = [] ;
        row.push(documents[i]);
        if(documents[i+1]){
          row.push(documents[i+1]);
        }
        this.documents2DArray.push(row) ;
        i++ ;
      }
      console.log(this.documents2DArray)
    })
  }


  goToDocumentLink(element){
    window.location.href = this.apiService.getAssetsService().getVideosUrl() + element.path ;
  }
}



