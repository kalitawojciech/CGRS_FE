import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameCommentService {

  constructor(private http: HttpClient) { }

  addGameComment(gameComment: any) {
    return this.http.post(environment.apiUrl + 'gamecomment', gameComment);
  }

  updateGameComment(gameComment: any) {
    return this.http.put(environment.apiUrl + 'gamecomment', gameComment);
  }

  deleteGameComment(id: string) {
    return this.http.delete(environment.apiUrl + 'gamecomment/' + id);
  }
}
