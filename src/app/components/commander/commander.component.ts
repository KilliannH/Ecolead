import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/AppData';
import{ LocalService} from "../../services/local.service";

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {
  commander = {name: '', country: '' };
  constructor(private localService: LocalService ) { }

  ngOnInit(): void {
    let commanderName = this.localService.commander_name
  }
  setCommanderName(){
    this.localService.commander_name = this.commander.name
}
}
