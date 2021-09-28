import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { GameCommentService } from '../../../../services/game-comment.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  sub!: Subscription;
  form = new FormGroup({});
  model = { message: '' };
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
        'message': this.model.message
      }

      this.gameCommentService.addGameComment(request)
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
