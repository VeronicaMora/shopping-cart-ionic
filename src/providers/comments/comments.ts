import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentsProvider {

  constructor(public http: HttpClient) {
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
  deleteComment(id_comment){
    return this.http.delete(`http://localhost:5000/comments/${id_comment}`)
  }
}
