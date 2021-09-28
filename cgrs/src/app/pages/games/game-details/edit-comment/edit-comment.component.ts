import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Subscription } from 'rxjs';
import { GameCommentService } from '../../../../services/game-comment.service';
import { AddCommentComponent } from '../add-comment/add-comment.component';


export interface EditGameCommentData {
  id: string,
  gameId: string,
  message: number
}

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {
  sub!: Subscription;
  form = new FormGroup({});
  model = { message: this.data.message };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'message',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Comment',
        placeholder: 'Enter comment',
        required: true,
      }
    }
  ];

  constructor(
    private gameCommentService: GameCommentService,
    private dialogRef: MatDialogRef<AddCommentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: EditGameCommentData
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
        'message': this.model.message
      }

      this.gameCommentService.updateGameComment(request)
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
