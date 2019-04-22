import { Component } from '@angular/core';
import { MovieAppService } from './movie-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-project';
  value;
  
  
  
     constructor(public _movieApi: MovieAppService) {}
     
     onClick(){
      this._movieApi.getMovies(this.value).subscribe((response: any) => {this._movieApi.data = response.results})
     }
     
     
     
  
}
