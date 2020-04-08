import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogGameEventDialog} from './dialog/DialogGameEventDialog';
import {LocalService} from '../services/local.service';
import {forkJoin} from 'rxjs';
import {Resource} from '../models/Resource';
import {Event} from '../models/Event';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  resources: Resource [];

  events: Event [];

  constructor(public dialog: MatDialog, private localService: LocalService) { }

  ngOnInit(): void {
    let observables = [this.localService.getEvents(), this.localService.getResources()];

    forkJoin(observables).subscribe(([events, resources]) => {
      if(events) {
        this.events = events;
      }

      if(resources) {
        this.resources = resources;
      }
        setTimeout(() => this.openDialog(this.events[0]), 2000);
      });
  }

  openDialog(gameEvent: Event): void {
    const dialogRef = this.dialog.open(DialogGameEventDialog, {
      width: '500px',
      data: gameEvent
    });

    dialogRef.afterClosed().subscribe(result => {
      this.events.forEach((event) => {
        if(event.id === result.eventId) {
          this.resources.forEach((resource) => {
            if(result.selectedChoice.affectedResourceId == resource.id) {
              resource.score += result.selectedChoice.score;
            }
          });
        }
      });
    });
  }
}
