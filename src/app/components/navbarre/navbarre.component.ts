import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarre',
  templateUrl: './navbarre.component.html',
  styleUrls: ['./navbarre.component.css']
})
export class NavbarreComponent implements OnInit {
  clickSoundNumber: number;
  iconsound: string;

  constructor() {
    this.clickSoundNumber = 0;
    this.iconsound = 'audiotrack';
  }

  ngOnInit(): void {
  }


  clickSound() {
    if (this.clickSoundNumber === 0 )
    { this.clickSoundNumber++;
      this.iconsound = 'music_off';
    }else{
      this.clickSoundNumber--;
      this.iconsound = 'audiotrack';

    }




  }
}
