import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.scss']
})
export class InTheatersComponent implements OnInit {
  nowPlaying = [];

  constructor(public _movieApi: MovieAppService, private router: Router) { }
  
  
  
  onMovie(value){
    this._movieApi.getMovie(value).subscribe((response: any) => {
      this._movieApi.displayMovie = response
      console.log(this._movieApi.displayMovie)
      this.router.navigate(['/display'])
    })
  }
  
  onInTheaters() {
    this._movieApi.getNowPlaying().subscribe((response: any) => {this._movieApi.data = response.results})
       this.router.navigate([`/search`]);
  }
  
  onNowPlaying(){
    this._movieApi.getNowPlaying().subscribe((response: any) => {
      this.nowPlaying = response.results
    })
  }
  ngOnInit() {
    this.onNowPlaying()
  }

}
