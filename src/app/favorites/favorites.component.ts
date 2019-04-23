import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  
  favorites = [];

  constructor( public _movieApi: MovieAppService, private router: Router, public _user: UserService ) { }
  
  onGetFavorites(){
    this._user.getFavorites().subscribe((response: any) => {
      console.log(response)
      this.favorites = response
    })
  }

  ngOnInit() {
    this.onGetFavorites()
  }

}
