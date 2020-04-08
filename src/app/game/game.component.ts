import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogGameEventDialog} from './dialog/DialogGameEventDialog';
import {LocalService} from '../services/local.service';

export interface DialogData {
  title: string;
  desc: string;
  img: string;
  choices : string [];
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  resources: {
    euros: number,
    happiness: number,
    pollution: number
  };

  events: any;

  constructor(public dialog: MatDialog, private localService: LocalService) { }

  ngOnInit(): void {
    this.localService.getEvents().subscribe((res) => {
      if(res) {
        this.events = res;
        console.log(this.events);

        this.resources = {
          euros: 2000,
          happiness: 5,
          pollution: 5
        };

        setTimeout(() => this.openDialog(this.events[0]), 2000);
      }
    });
  }

  openDialog(gameEvent): void {
    const dialogRef = this.dialog.open(DialogGameEventDialog, {
      width: '500px',
      data: gameEvent
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
