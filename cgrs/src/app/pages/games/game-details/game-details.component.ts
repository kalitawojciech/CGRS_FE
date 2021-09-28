import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IGamePopulated } from '../../../models/game-populated';
import { GamesService } from '../../../services/games.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { UsersService } from '../../../services/users.service';
import { IUser } from '../../../models/user';
import { IGameComment } from '../../../models/game-comment';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { GameCommentService } from '../../../services/game-comment.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  sub!: Subscription;
  game$!: Observable<IGamePopulated>;
  currentUser: IUser;

  constructor(   
    private router: Router,
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private dialog: MatDialog,
    private usersService: UsersService,
    private gameCommentService: GameCommentService
    ) { }

  ngOnInit(): void {
    this.usersService.currentUser.subscribe(user => this.currentUser = user);
    this.getGame();
  }

  getGame(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(typeof(id));

    if(id)
    {
      this.game$ = this.gamesService.getGameByIdPopulated(id);
    }
  }

  openAddGameCommentDialog(gameId: string): void {
    const dialogRef = this.dialog.open(AddCommentComponent, {
      width: '400px',
      data: gameId
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getGame();
    });
  }

  openEditGameCommentDialog(gameComment: IGameComment): void {
    const dialogRef = this.dialog.open(EditCommentComponent, {
      width: '400px',
      data: { gameId: gameComment.gameId, id: gameComment.id, message: gameComment.message }
    });

    dialogRef.afterClosed().subscribe(() => {
        this.getGame();
    });
  }

  deleteComment(commentId: string): void {
    this.sub = this.gameCommentService.deleteGameComment(commentId).subscribe({
      next: () => {
        this.getGame();
      }
    })
  }

}
