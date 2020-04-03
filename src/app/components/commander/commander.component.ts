import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/AppData';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {

  commander = {name: ''};

  constructor() { }

  ngOnInit(): void {}

  commanderName(){
    console.log(this.commander);
  }
}
