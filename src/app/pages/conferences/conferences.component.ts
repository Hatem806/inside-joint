import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit {


  constructor( public apiService : ApiService , private router : RouterModule ) { }

  ngOnInit(): void {
    this.apiService.getconferenceServices().getConferences().subscribe( conference => {
      console.log(conference);
    })

  }
}
