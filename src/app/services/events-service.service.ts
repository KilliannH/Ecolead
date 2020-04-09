import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events : {
    id: number,
    title: string;
    description: string;
    image: string;
    button1: string;
    button2: string;
    button3: string;

    choice1money: number;
    choice1garbage: number;
    choice1hapiness: number;

    choice2money: number;
    choice2garbage: number;
    choice2hapiness: number;

    choice3money: number;
    choice3garbage: number;
    choice3hapiness: number;
  }[];


  constructor() {
    this.events = [
      {
        id: 1,
        title: 'Emission de Co2',
        description: "Commander, le peuple gronde, en effet il n\'est pas satisfait des mesures prises lors de la Cop 24, nous devons prendre des mesures",
        image: 'https://media.gettyimages.com/photos/manifestation-paris-avant-louverture-du-sommet-cop21-place-de-la-29-picture-id952487960',
        button1: 'Sans économie viable, nous ne pouvons pas effectuer de transitions écologique.',
        button2: 'Je ne veux pas avoir le peuple sur le dos, donnez leurs de fausses prommesses',
        button3: 'Il est vrai que nous pouvons faire mieux que les accords que la Cop 24',

        choice1money: 10,
        choice1garbage: -10,
        choice1hapiness: 0,

        choice2money: 10,
        choice2garbage: 0,
        choice2hapiness: 0,

        choice3money: -15,
        choice3garbage: +10,
        choice3hapiness: +10,
      }
    ]
  }
}
