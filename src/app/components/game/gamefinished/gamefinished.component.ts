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

  }

}
