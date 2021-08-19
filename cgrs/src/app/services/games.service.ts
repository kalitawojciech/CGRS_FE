import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IGame } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getGameById(id: string): Observable<IGame> {
    return this.http.get<IGame>(environment.apiUrl + 'games/' + id);
  }

  getGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(environment.apiUrl + 'games');
  }

  addGame(game: any) {
    return this.http.post(environment.apiUrl + 'games', game);
  }

  updateGame(game: any) {
    return this.http.put(environment.apiUrl + 'games', game);
  }

  deleteGame(id: string) {
    return this.http.delete(environment.apiUrl + 'games/' + id);
  }
}
