import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hud',
  templateUrl: './hud.component.html',
  styleUrls: ['./hud.component.css']
})
export class HudComponent implements OnInit {

  @Input() resources: any;
  constructor() { }

  ngOnInit(): void {
    this.resources = {};
  }

}
