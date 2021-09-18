import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IGame } from '../../../models/game';
import { GamesService } from '../../../services/games.service';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements OnInit {
  sub!: Subscription;
  displayedColumns: string[] = ['name', 'description', 'categoryName', 'edit', 'delete'];
  games: IGame[] = [];
  dataSource: MatTableDataSource<IGame>;
  resultsCount: number;

  isLoadingResults: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private gamesService: GamesService) { 
    this.getGames();
  }

  ngOnInit(): void {
  }

  getGames(): void {
    this.sub = this.gamesService.getGames({isActive: false}).subscribe({
      next: games => {
        this.games = games;
        this.dataSource = new MatTableDataSource<IGame>(this.games);
        this.isLoadingResults = false;
        this.resultsCount = games.length;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  changeGameStatus(id: string): void {
    this.sub = this.gamesService.changeGameStatus(id).subscribe({
      next: () => {
        this.getGames();
      }
    })
  }
}
