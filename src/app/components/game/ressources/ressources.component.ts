import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css'],
})
export class RessourcesComponent implements OnInit {
  constructor(public gameService: GameService) {
    console.log(gameService.gameResources);
  }

  ngOnInit(): void {}
}
