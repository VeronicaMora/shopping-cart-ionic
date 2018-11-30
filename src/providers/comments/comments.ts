import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CommentsProvider Provider');
  }

  getHeaders() {
    return new HttpHeaders({
      authorization: localStorage.getItem("token")
    });
  }

  getComments(){
    return this.http.get('http://localhost:5000/comments', { headers: this.getHeaders() })
  }
  createComment(comment_text, created_at, id_product, id_user){
    return this.http.post('http://localhost:5000/comments', { comment_text, created_at, id_product, id_user }, { headers: this.getHeaders() })
  }

}
