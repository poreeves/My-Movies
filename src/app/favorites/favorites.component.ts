import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor( public _movieApi: MovieAppService, private router: Router ) { }

  ngOnInit() {
  }

}
