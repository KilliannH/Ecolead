import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/AppData';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css'],
})
export class CommanderComponent implements OnInit {
  commander = { name: '', country: '' };
  constructor(private gameService: GameService) {}

  ngOnInit(): void {}
  startNewGame() {
    this.gameService.loadGame(this.commander.country, this.commander.name);
  }
}
