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
  
  similarMovies = []
  

  constructor(public _movieApi: MovieAppService, private router: Router, public _user: UserService) { }
  
  onAddFavorites(){
    let obj = {
    "title": this._movieApi.displayMovie.title,
    "movieId": this._movieApi.displayMovie.id,
    "userId": sessionStorage.getItem('userId'),
    "image": this._movieApi.displayMovie.poster_path,
    "overview": this._movieApi.displayMovie.overview
  }
  
    this._user.postFavorites(obj).subscribe((response: any) => console.log(response) )
  }
  
  onSimilar(){
    this._movieApi.getSimilar().subscribe((response: any) => {
      this.similarMovies = response.results
      console.log(response)
      console.log(this.similarMovies)
      
    })
  }
  ngOnInit() {
     this.onSimilar()
  }

}
