import { Injectable } from '@angular/core';


// import { money } from '../components/game/ressources/ressources.component';


// money: number = 50;
// happiness: number = 50;
// garbage: number = 50;

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  commander_name:string ;
  eventsAnswered: number = 1;

 money: number = 50;
 garbage: number = 50;
 hapiness: number = 50;
 score : number = this.money *10 + this.garbage *10 + this.money *10;


  constructor() { }
}
