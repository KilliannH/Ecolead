import {Component, Input, OnInit} from '@angular/core';
import {LocalService} from '../../../services/local.service';
import {EventsService} from '../../../services/events-service.service';
import {printLine} from 'tslint/lib/verify/lines';
import {ActivatedRoute, Router} from '@angular/router';
import {timeout} from 'rxjs/operators';



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

  currEvent: any;
  constructor(public localService: LocalService,
              public eventService: EventsService,
              public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let eventId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.currEvent = this.eventService.events[eventId - 1];
    console.log(this.eventService[0]);
  }


  getChoice1(){

      this.localService.money += this.currEvent.choice1money,
      this.localService.garbage += this.currEvent.choice1garbage,
      this.localService.hapiness += this.currEvent.choice1hapiness,
        setTimeout(() =>  {
      this.router.navigate(['game']);
    }, 2000 );
  }
  getChoice2(){
     this.localService.money += this.currEvent.choice2money,
      this.localService.garbage += this.currEvent.choice2garbage,
      this.localService.hapiness += this.currEvent.choice2hapiness ,
       setTimeout(() =>  {
         this.router.navigate(['game']);
       }, 2000 );
  }
  getChoice3(){
     this.localService.money += this.currEvent.choice3money,
      this.localService.garbage += this.currEvent.choice3garbage,
      this.localService.hapiness += this.currEvent.choice3hapiness ,
       setTimeout(() =>  {
         this.router.navigate(['game']);
       }, 2000 );
  }

}
