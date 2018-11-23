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
  getProducts(){
    return this.http.get('http://192.168.43.218:5000/products', { headers: this.getHeaders() })
  }
  createproduct(name, des_product, price, available, image){
    return this.http.post('http://192.168.43.218:5000/products', { name, des_product, price, available, image }, { headers: this.getHeaders() })
  }
  updateProduct(id_product, name, des_product, price, available, image){
    return this.http.patch(`http://192.168.43.218:5000/products/${id_product}`, { name, des_product, price, available, image }, { headers: this.getHeaders() })
  }
  removeProduct(id_product){
    return this.http.delete(`http://192.168.43.218:5000/products/${id_product}`, { headers: this.getHeaders() })
  }
  getMyProducts(){
    return this.http.get('http://192.168.43.218:5000/profile', { headers: this.getHeaders() })
  }
}