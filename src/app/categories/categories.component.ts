import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  
  categories = [];
  value: string = '';

  constructor( public _movieApi: MovieAppService, private router: Router) { }
  
  onCategoryClick(id,name){
    this._movieApi.getGenre(id).subscribe((response: any) => {
      // console.log(response)
      this._movieApi.data = response.results
      this.router.navigate(['/search'])
      this._movieApi.setCategoryName(name)
      this._movieApi.categoryOn = true
      this._movieApi.searchOn = false
    })
  }
  
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
