import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Event } from '../../models/Event';

@Component({
  selector: 'dialog-game-event-dialog',
  templateUrl: './dialog-game-event-dialog.component.html',
  styleUrls: ['./dialog-game-event-dialog.component.css']
})
export class DialogGameEventDialog {

  eventId: number;
  constructor(
    public dialogRef: MatDialogRef<DialogGameEventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Event) {
    this.eventId = data.id;
  }

}
