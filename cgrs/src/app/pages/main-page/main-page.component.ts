import { Component, OnInit } from '@angular/core';
import { IGame } from '../../models/game';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  sub!: Subscription;
  displayedColumns: string[] = ['name', 'description'];
  games: IGame[] = [];
  dataSource = new MatTableDataSource<IGame>(this.games);

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.sub = this.gamesService.getGames().subscribe({
      next: games => {
        this.games = games;
        this.dataSource = new MatTableDataSource<IGame>(this.games);
      }
    })
  }

}
