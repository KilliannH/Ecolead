import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Event } from 'src/app/models/Interfaces';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  hidden: boolean = true;

  actualEvent: Event;

  constructor(private gameService: GameService) {
    gameService.eventEmitter.on('eventChanged', () => {
      this.hidden = false;
      this.actualEvent = this.gameService.findEvent(
        this.gameService.actualEventId
      );
    });
  }

  ngOnInit(): void {}

  onActionClick(actionIndex: number) {
    this.hidden = true;

    this.gameService.onActionSelect(this.actualEvent, actionIndex);
  }
}
