import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public _movieApi: MovieAppService, public _user: UserService) { }
  
  onPost() {
    return this._user.postUser().subscribe((response: any) => {console.log(this._user.user)})
    
  }

  ngOnInit() {
  }

}
