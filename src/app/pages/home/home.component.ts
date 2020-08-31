import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JointService } from 'src/app/services/joints.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(public apiService : ApiService) { }

  ngOnInit(): void {
  }

  goToJoint(jointName: string, jointImgSource : string){
    this.apiService.getJointService().jointName = jointName  ;
    this.apiService.getJointService().jointImageSrc = jointImgSource  ;
  }

}
