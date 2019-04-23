import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  postUrl: string = 'http://mean-stack-2019-02-phil-phortonssf.c9users.io:8080/api/appUsers/'
  
  
  user = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": ""
  }
  
  email: string = '';
  password: string = '';
 
  
  
  

  constructor( public _http: HttpClient ) { }
  
  postUser() {
    return this._http.post(this.postUrl, this.user)
    // return this._http.post(this.postUrl,{
    // "firstName": "Jon",
    // "lastName": "Doe",
    // "email": "Jon@Doe.com",
    // "password": "password"
    //   })
  }
  
  loginUser(){
    return this._http.post(this.postUrl + 'login',
    {"email": this.email,
    "password": this.password
      })
      console.log(this.email)
  }

  getUserId() {
    return this._http.get('http://mean-stack-2019-02-phil-phortonssf.c9users.io:8080/api/appUsers/' + sessionStorage.getItem('userId') + '?access_token=' + sessionStorage.getItem('token'))
  }
 
  postFavorites(obj) {
    return this._http.post('http://mean-stack-2019-02-phil-phortonssf.c9users.io:8080/api/appUsers/' + sessionStorage.getItem('userId') + '/movies?access_token=' + sessionStorage.getItem('token'), obj)
  }
  
  getFavorites(){
     return this._http.get('http://mean-stack-2019-02-phil-phortonssf.c9users.io:8080/api/appUsers/' + sessionStorage.getItem('userId') + '/movies?access_token=' + sessionStorage.getItem('token'))
    }
  
  
}
