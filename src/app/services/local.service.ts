import { Injectable } from '@angular/core';


// import { money } from '../components/game/ressources/ressources.component';


// money: number = 50;
// happiness: number = 50;
// garbage: number = 50;

@Injectable({
  providedIn: 'root'
})
export class LocalService {
 money: number = 50;
 garbage: number = 50;
 hapiness: number = 50;


  constructor() { }
}

export class EventsServices{
  title: string = 'Emission de Co2';
  description: string = 'Commander, le peuple gronde, en effet il n\'est pas satisfait des mesures prises lors de la Cop 24, nous devons prendre des mesures';
  image: string = 'https://media.gettyimages.com/photos/manifestation-paris-avant-louverture-du-sommet-cop21-place-de-la-29-picture-id952487960';
  button1: string = 'Sans économie viable, nous ne pouvons pas effectuer de transitions écologique.';
  button2: string = 'Je ne veux pas avoir le peuple sur le dos, donnez leurs de fausses prommesses';
  button3: string = 'Il est vrai que nous pouvons faire mieux que les accords que la Cop 24';

  choice1money: number = 10 ;
  choice1garbage: number = -10 ;
  choice1hapiness: number = 0 ;

  choice2money: number = 10 ;
  choice2garbage: number = 0 ;
  choice2hapiness: number = 0 ;

  choice3money: number = -15 ;
  choice3garbage: number = +10 ;
  choice3hapiness: number = +10 ;


  constructor() {}
}


