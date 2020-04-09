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

}
