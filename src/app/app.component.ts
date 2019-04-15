import { Component } from '@angular/core';
import { MovieAppService } from './movie-app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-project';
  value;
  data = [];
  
     constructor(public _movieApi: MovieAppService) {}
     
     onClick(){
       this._movieApi.getMovie(this.value).subscribe((response: any) => {this.data = response.results})
     }
     
  
}
