import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IGame } from '../../models/game';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { GamesService } from '../../services/games.service';
import { MatDialog } from '@angular/material/dialog';
import { AddGameMarkComponent } from './add-game-mark/add-game-mark.component';
import { EditGameMarkComponent } from './edit-game-mark/edit-game-mark.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit {
  sub!: Subscription;
  displayedColumns: string[] = ['name', 'description', 'avgScore', 'updateScore'];
  games: IGame[] = [];
  dataSource: MatTableDataSource<IGame>;
  resultsCount: number;

  isLoadingResults: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private gamesService: GamesService,
    private dialog: MatDialog
    ) {
    this.getGames();
   }

  ngAfterViewInit(): void {
    
  }

  getGames(): void {
    this.sub = this.gamesService.getGames({isActive: true}).subscribe({
      next: games => {
        this.games = games;
        this.dataSource = new MatTableDataSource(this.games);
        this.resultsCount = games.length;
        this.isLoadingResults = false;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  openAddGameMarkDialog(gameId: string): void {
    const dialogRef = this.dialog.open(AddGameMarkComponent, {
      width: '400px',
      data: gameId
    });

    dialogRef.afterClosed().subscribe(() => {
        this.getGames();
    });
  }

  openEditGameMarkDialog(game: IGame): void {
    const dialogRef = this.dialog.open(EditGameMarkComponent, {
      width: '400px',
      data: { gameId: game.id, id: game.gameMarkResponse.id, averageScore: game.gameMarkResponse.averageScore }
    });

    dialogRef.afterClosed().subscribe(() => {
        this.getGames();
    });
  }
}
