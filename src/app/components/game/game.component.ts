import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {

    setTimeout(() =>  {
      this.router.navigate(['events']);
    }, 2000 );
  }
  }
