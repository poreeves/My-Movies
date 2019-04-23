import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  

  constructor(public _movieApi: MovieAppService, private router: Router, public _user: UserService) { }
  
  onAddFavorites(){
    let obj = {
    "title": this._movieApi.displayMovie.title,
    "movieId": this._movieApi.displayMovie.id,
    "userId": sessionStorage.getItem('userId')
  }
  
    this._user.postFavorites(obj).subscribe((response: any) => console.log(response) )
  }

  ngOnInit() {
  }

}
