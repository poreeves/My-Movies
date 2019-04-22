import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  value: string = '';
  

  constructor(public _movieApi: MovieAppService, private router: Router) { }
  
  onSearch(){
      this._movieApi.getMovies(this.value).subscribe((response: any) => {this._movieApi.data = response.results})
       this.router.navigate([`/search`]);
     }
  
  onLogin(){
      this._movieApi.loginUser().subscribe((response: any) => {
        console.log(response); 
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userId);
        this._movieApi.getUserId();
      })
     }
     
    
     
     
  

  ngOnInit() {
  }

}
