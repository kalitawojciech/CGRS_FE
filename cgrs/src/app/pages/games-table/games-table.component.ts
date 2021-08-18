import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGame } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements OnInit {
  sub!: Subscription;

  games: IGame[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.sub = this.gamesService.getGames().subscribe({
      next: games => {
        this.games = games;
      }
    })
  }
}
