import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public _movieApi: MovieAppService) { }
  
  onPost() {
    return this._movieApi.postUser().subscribe((response: any) => {console.log(this._movieApi.user)})
    
  }

  ngOnInit() {
  }

}
