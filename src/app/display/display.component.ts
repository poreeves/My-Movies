import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(public _movieApi: MovieAppService, private router: Router) { }

  ngOnInit() {
  }

}
