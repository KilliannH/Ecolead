import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/AppData';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {
  commander = {name: '', country: '' };
  constructor() { }

  ngOnInit(): void {

  }
  getCommanderName(){
    console.log(this.commander);
}
}
