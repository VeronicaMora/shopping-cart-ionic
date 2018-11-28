import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PetitionsProvider {

  constructor(private http: HttpClient) {
  }
  
  getHeaders() {
    return new HttpHeaders({
      authorization: localStorage.getItem("token")
    });
  }
  
  signup(username, password){
    return this.http.post('http://192.168.43.218:5000/auth/signup', { username, password })
  }
  login(username, password){
    return this.http.post('http://192.168.43.218:5000/auth/login', { username, password })
  }
  removeAccount(){
    return this.http.delete(`http://192.168.43.218:5000/auth`, { headers: this.getHeaders() })
  }
}