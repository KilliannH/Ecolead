import {Component, Input, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';


import {money} from '../ressources/ressources.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})



export class EventsComponent implements OnInit {
@Input()
  eventMoney: number = money;
  eventMoneys = money;
//  eventGarbage: number = garbage;
//  eventHappiness: number = happiness;

  constructor() { }

  ngOnInit(): void {
  }


  getChoice1(){
    this.eventMoney += 10;
//    this.money += 10;
    console.log(this.eventMoney);
    console.log(money);
  }
  getChoice2(){
//    this.eventHappiness -= 10;
//    this.eventGarbage += 10;
//    console.log(this.eventGarbage);
  }
  getChoice3(){
//    this.eventGarbage -= 10;
  }

}
