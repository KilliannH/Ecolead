import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarre',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isclickSound: boolean = true;
  iconSound: string = 'audiotrack';

  constructor() {

  }

  ngOnInit(): void {
  }


  clickSound() {
    if (this.isclickSound === true )
    { this.isclickSound = false;
      this.iconSound = 'music_off';
    }else{
      this.isclickSound = true;
      this.iconSound = 'audiotrack';

    }




  }
}
