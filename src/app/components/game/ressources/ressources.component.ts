import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})



export class RessourcesComponent implements OnInit {
  money: number = 50;
  happiness: number = 50;
  garbage: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}

export let money = 50;
//export let happiness;
//export let garbage;
