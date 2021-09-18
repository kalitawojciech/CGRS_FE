import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameMarkService {

  constructor(private http: HttpClient) { }

  addGamMark(gameMark: any) {
    return this.http.post(environment.apiUrl + 'gamesmarks', gameMark);
  }

  updateGameMark(gameMark: any) {
    return this.http.put(environment.apiUrl + 'gamesmarks', gameMark);
  }
}
