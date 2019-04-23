import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  value: string = '';
  loggedIn: boolean = false;
  

  constructor(public _movieApi: MovieAppService, private router: Router, public _user: UserService) { }
  
  onSearch(){
      this._movieApi.getMovies(this.value).subscribe((response: any) => {this._movieApi.data = response.results})
       this.router.navigate([`/search`]);
  }
  
  onLogin(){
      this._user.loginUser().subscribe((response: any) => {
        console.log(response); 
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userId);
        this._user.getUserId();
        this.loggedIn = true
      })
  }

  

  ngOnInit() {
  }

}
