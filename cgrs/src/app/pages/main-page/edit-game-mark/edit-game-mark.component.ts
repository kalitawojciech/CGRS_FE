import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { GameMarkService } from '../../../services/game-mark.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface EditaGameMarkData {
  id: string,
  gameId: string,
  averageScore: number
}

@Component({
  selector: 'app-edit-game-mark',
  templateUrl: './edit-game-mark.component.html',
  styleUrls: ['./edit-game-mark.component.scss']
})
export class EditGameMarkComponent implements OnInit {
  sub!: Subscription;
  form = new FormGroup({});
  model = { averageScore: this.data.averageScore };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'averageScore',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Score',
        placeholder: 'Enter game name',
        required: true,
        min: 1,
        max: 100
      },
      validation: {
        messages: {
          min: "Score must be greater than 0",
          max: "Score must be less or equal 100"
        }
      }
    }
  ];
  constructor(
    private gameMarkService: GameMarkService,
    private dialogRef: MatDialogRef<EditGameMarkComponent>,
    @Inject(MAT_DIALOG_DATA) private data: EditaGameMarkData
    ) { }

  ngOnInit(): void {
  }

  onClickCancel(): void {
    this.dialogRef.close();
  }

  onClickSave(): void {
    if (this.form.valid)
    {
      var request = {
        'id': this.data.id,
        'gameId': this.data.gameId,
        'averageScore': this.model.averageScore
      }

      this.gameMarkService.updateGameMark(request)
      .pipe()
      .subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: err => {
          console.log(err.error);
        }
      });
    }
  }
}
