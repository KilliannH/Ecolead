import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  resources: any;
  constructor() { }

  ngOnInit(): void {
    this.resources = {
      euros: 2000,
      happiness: 5,
      pollution: 5
    }
  }

}
