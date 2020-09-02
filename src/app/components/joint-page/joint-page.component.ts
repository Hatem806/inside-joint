import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-joint-page',
  templateUrl: './joint-page.component.html',
  styleUrls: ['./joint-page.component.css']
})
export class JointPageComponent implements OnInit {
  @Input() jointName : string  ;
  @Input() jointImageSrc: string ;
  constructor(private route : ActivatedRoute ,private apiService : ApiService ) { }

  ngOnInit( ): void {
    this.route.queryParams.subscribe(data => {
     this.jointName = data.bodyPart
    })
    this.jointImageSrc = this.apiService.getJointService().jointImageSrc ;
    console.log(this.jointName)
  }


  goToJoint(jointName: string, jointImgSource : string){
    this.apiService.getJointService().jointName = jointName  ;
    this.apiService.getJointService().jointImageSrc = jointImgSource  ;
  }


}
