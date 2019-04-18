import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieAppService {
  
  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=db0479c4a47b38fc5c1a3cde978bb2e4&language=en-US&query='
  endUrl: string = '&page=1&include_adult=false'
  postUrl: string = 'http://mean-stack-2019-02-phil-phortonssf.c9users.io:8080/api/appUsers/'
  genreUrl: string = 'https://api.themoviedb.org/3/discover/movie?api_key=db0479c4a47b38fc5c1a3cde978bb2e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28'
  

  constructor( public _http: HttpClient ) { }
  
  getMovie (value) {
    return this._http.get(this.baseUrl + value + this.endUrl)
    // return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=db0479c4a47b38fc5c1a3cde978bb2e4&language=en-US&query=star%20wars%20&page=1&include_adult=false')
  }
  getCategories(){
    return this._http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=db0479c4a47b38fc5c1a3cde978bb2e4&language=en-US')
  }
  getGenre (value) {
    return this._http.get(this.genreUrl + value)
  }
postUser() {
    return this._http.post(this.postUrl,{
  "firstName": "Jack",
  "lastName": "Doe",
  "email": "Jack@Doe.com",
  "password": "password"
    })
  }
  
loginUser(){
  return this._http.post(this.postUrl + 'login',
  {"email": "James@Doe.com",
  "password": "password"
    })
}

getUserId() {
  return this._http.get('http://mean-stack-2019-02-phil-phortonssf.c9users.io:8080/api/appUsers/' + sessionStorage.getItem('userId') + '?access_token=' + sessionStorage.getItem('token'))
}
  
  
}

  
