import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../game.component';

@Component({
  selector: 'dialog-game-event-dialog',
  templateUrl: './dialog-game-event-dialog.component.html',
  styleUrls: ['./dialog-game-event-dialog.component.css']
})
export class DialogGameEventDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogGameEventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
