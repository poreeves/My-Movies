import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  

  constructor(public _movieApi: MovieAppService) { }
  
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
