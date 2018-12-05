import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CartProvider {

  constructor(public http: HttpClient) {
  }

  getHeaders() {
    return new HttpHeaders({
      authorization: localStorage.getItem("token")
    });
  }

  getCartProducts(){
    return this.http.get('http://localhost:5000/cart', { headers: this.getHeaders() })
  }
  addCartProduct(id_product){
    return this.http.post(`http://localhost:5000/cart/${id_product}`, { headers: this.getHeaders() })
  }
  removeCartProduct(id_product){
    return this.http.delete(`http://localhost:5000/cart/${id_product}`, { headers: this.getHeaders() })
  }
}
