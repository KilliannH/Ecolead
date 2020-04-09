import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../../services/local.service";

@Component({
  selector: 'app-gamefinished',
  templateUrl: './gamefinished.component.html',
  styleUrls: ['./gamefinished.component.css']
})
export class GamefinishedComponent implements OnInit {

  constructor(public localService: LocalService) { }

  ngOnInit(): void {
     let score: number = this.localService.hapiness * 10 + this.localService.garbage * 10 + this.localService.hapiness * 10
  }

}
