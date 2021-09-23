import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IGame } from '../../../models/game';
import { GamesService } from '../../../services/games.service';

@Component({
  selector: 'app-recommended-games',
  templateUrl: './recommended-games.component.html',
  styleUrls: ['./recommended-games.component.scss']
})
export class RecommendedGamesComponent {
  sub!: Subscription;
  displayedColumns: string[] = ['name', 'description', 'category', 'avgScore'];
  games: IGame[] = [];
  dataSource: MatTableDataSource<IGame>;
  resultsCount: number;

  isLoadingResults: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private gamesService: GamesService
    ) {
    this.getGames();
   }

  getGames(): void {
    this.sub = this.gamesService.getRecommendedGames().subscribe({
      next: games => {
        this.games = games;
        this.dataSource = new MatTableDataSource(this.games);
        this.resultsCount = games.length;
        this.isLoadingResults = false;
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}
