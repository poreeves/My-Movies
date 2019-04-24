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
  
  favorites: any = [];
  detailFavorites = [];

  constructor( public _movieApi: MovieAppService, private router: Router, public _user: UserService ) { }
  
  onGetFavorites(){
    this._user.getFavorites().subscribe((response: any) => {
      console.log(response)
      this.favorites = response
      console.log(this.favorites)
    })
  }
  
   onMovie(value){
    this._movieApi.getMovie(value).subscribe((response: any) => {
      this._movieApi.displayMovie = response
      console.log(this._movieApi.displayMovie)
      this.router.navigate(['/display'])
  
    })
  }
  
  onDeleteFavorite(value) {
    this._user.delelteFavorite(value).subscribe((response:any) => {
      console.log(response)
      this.onGetFavorites()
    })
  }

  ngOnInit() {
    this.onGetFavorites()
  }

}
