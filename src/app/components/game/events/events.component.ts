import {Component, Input, OnInit} from '@angular/core';
import {LocalService} from '../../../services/local.service';
import {EventsServices} from '../../../services/local.service';
import {printLine} from 'tslint/lib/verify/lines';



// import {money} from '../ressources/ressources.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})



export class EventsComponent implements OnInit {
//  money = this.localService.money;
//  garbage = this.localService.garbage;
//  hapiness = this.localService.hapiness;

  constructor(public localService: LocalService,
              public events: EventsServices) { }

  ngOnInit(): void {
//    this.money = this.localService.money;
//    this.garbage = this.localService.garbage;
//    this.hapiness = this.localService.hapiness;

  }


  getChoice1(){

     this.localService.money += this.events.choice1money,
      this.localService.garbage += this.events.choice1garbage,
      this.localService.hapiness += this.events.choice1hapiness ;
          }
  getChoice2(){
     this.localService.money += this.events.choice2money,
      this.localService.garbage += this.events.choice2garbage,
      this.localService.hapiness += this.events.choice2hapiness ;
  }
  getChoice3(){
     this.localService.money += this.events.choice3money,
      this.localService.garbage += this.events.choice3garbage,
      this.localService.hapiness += this.events.choice3hapiness ;
  }

}
