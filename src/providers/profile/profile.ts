import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProfileProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProfileProvider Provider');
  }

  getHeaders() {
    return new HttpHeaders({
      authorization: localStorage.getItem("token")
    });
  }

  updateProfile(id_profile, image, info, id_user){
    return this.http.patch(`http://192.168.43.218:5000/profile/${id_profile}`, {  image, info, id_user }, { headers: this.getHeaders() })
  }
  getMyProducts(){
    return this.http.get('http://192.168.43.218:5000/ownProducts', { headers: this.getHeaders() })
  }
  getProfile(){
    return this.http.get('http://192.168.43.218:5000/profile', { headers: this.getHeaders() })
  }
}
