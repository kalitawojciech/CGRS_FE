import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IGame } from '../models/game';
import { GameFilter } from '../models/game-filter';
import { IGamePopulated } from '../models/game-populated';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getGameById(id: string): Observable<IGame> {
    return this.http.get<IGame>(environment.apiUrl + 'games/' + id);
  }

  getGameByIdPopulated(id: string): Observable<IGamePopulated> {
    return this.http.get<IGamePopulated>(environment.apiUrl + 'games/' + id + '/populated');
  }

  getGames(filter: any): Observable<IGame[]> {
    const headers = { 'Content-Type': 'application/json' };
    console.log(filter);
    const params = { ...filter }
    return this.http.get<IGame[]>(environment.apiUrl + 'games', { headers, params });
  }

  getRecommendedGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(environment.apiUrl + 'games/recommended',);
  }

  addGame(game: any) {
    return this.http.post(environment.apiUrl + 'games', game);
  }

  updateGame(game: any) {
    return this.http.put(environment.apiUrl + 'games', game);
  }

  changeGameStatus(id: string) {
    return this.http.put(environment.apiUrl + 'games/change-status/' + id, { });
  }
}
