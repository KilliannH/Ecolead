import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocalService} from '../../services/local.service';
import {EventsService} from '../../services/events-service.service';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public router: Router, private localService: LocalService, private eventsService: EventsService) { }



  ngOnInit(): void {

    if (this.localService.money < 0 || this.localService.garbage < 0 || this.localService.hapiness < 0) {
      console.log(this.localService.money)
      this.router.navigate(['gamefinished']);
    } else {

      let eventNb = this.localService.eventsAnswered;

      setTimeout(() => {
        this.router.navigate(['events/' + eventNb]);
        this.localService.eventsAnswered += 1;
      }, 2000);
    }
  }
}
