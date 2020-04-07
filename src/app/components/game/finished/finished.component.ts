import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css'],
})
export class FinishedComponent implements OnInit {
  hidden: boolean = true;
  constructor(public gameService: GameService) {
    this.gameService.eventEmitter.on('gameFinished', () => {
      this.hidden = false;
    });
  }

  ngOnInit(): void {}
}
