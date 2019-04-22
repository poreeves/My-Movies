import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public _movieApi: MovieAppService, private router: Router) { }
  onMovie(value){
    this._movieApi.getMovie(value).subscribe((response: any) => {
      console.log(response)
  
    })
  }

  ngOnInit() {
  }

}
