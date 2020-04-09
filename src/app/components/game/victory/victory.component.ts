import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../../services/local.service";

@Component({
  selector: 'app-victory',
  templateUrl: './victory.component.html',
  styleUrls: ['./victory.component.css']
})
export class VictoryComponent implements OnInit {

  constructor(public localService: LocalService) { }

  ngOnInit(): void {
  }
  resetscore(){
    this.localService.garbage = 50;
    this.localService.money = 50;
    this.localService.hapiness = 50;
    this.localService.eventsAnswered = 1;
  }

}
