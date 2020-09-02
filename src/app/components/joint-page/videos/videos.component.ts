import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  jointName : string ;
  videos2DArray = [] ;
  constructor(public apiService : ApiService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.jointName = data.bodyPart
     })

    this.apiService.getAssetsService().getVideos().subscribe( data => {
      console.log(data) ;
      let videos = [] ;
      data.assets.forEach( video => {
        if(video.bodyPart==this.jointName.toLowerCase()){
          videos.push(video) ;
        }
      })
      console.log(videos)

      let row ;
      for(let i =0; i< videos.length ; i++){
        row = [] ;
        row.push(videos[i]);
        if(videos[i+1]){
          row.push(videos[i+1]);
        }
        this.videos2DArray.push(row) ;
        i++ ;
      }
      console.log(this.videos2DArray)
    })
  }
  goToVideoLink(element){
    window.location.href = this.apiService.getAssetsService().getVideosUrl() + element.path ;
  }

}
