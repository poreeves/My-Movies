import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  
  categories = [];
  value: string = '';

  constructor(public _movieApi: MovieAppService) { }
  
  onCategory(){
    this._movieApi.getCategories().subscribe((response: any) => {
      console.log(response)
      this.categories = response.genres
      
    })
  }
  

  ngOnInit() {
    this.onCategory()
  }

}
