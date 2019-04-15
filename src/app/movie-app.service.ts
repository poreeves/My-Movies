import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieAppService {
  
  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=db0479c4a47b38fc5c1a3cde978bb2e4&language=en-US&query='
  endUrl: string = '&page=1&include_adult=false'
  

  constructor( public _http: HttpClient ) { }
  
  getMovie (value) {
    return this._http.get(this.baseUrl + value + this.endUrl)
    // return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=db0479c4a47b38fc5c1a3cde978bb2e4&language=en-US&query=star%20wars%20&page=1&include_adult=false')
  }
}
