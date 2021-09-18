import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { GameMarkService } from '../../../services/game-mark.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-game-mark',
  templateUrl: './add-game-mark.component.html',
  styleUrls: ['./add-game-mark.component.scss']
})
export class AddGameMarkComponent implements OnInit {
  sub!: Subscription;
  form = new FormGroup({});
  model = { averageScore: 100 };
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
    private dialogRef: MatDialogRef<AddGameMarkComponent>,
    @Inject(MAT_DIALOG_DATA) private data: string
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
        'gameId': this.data,
        'averageScore': this.model.averageScore
      }

      this.gameMarkService.addGamMark(request)
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
