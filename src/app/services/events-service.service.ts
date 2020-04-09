import { Injectable } from '@angular/core';
import {LocalService} from "./local.service";

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


  constructor(private localService: LocalService) {
    this.events = [
      {
        id: 1,
        title: 'Emission de Co2',
        description: this.localService.commander_name + " , le peuple gronde, en effet il n\'est pas satisfait des mesures prises lors de la Cop 24, nous devons prendre des mesures",
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
      },
      {
        id: 2,
        title: 'Lorem Ipsum',
        description:  this.localService.commander_name + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit diam a lectus interdum tempor. ',
        image: 'https://cdn.pixabay.com/photo/2011/12/13/18/28/wave-11061_960_720.jpg',
        button1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in. ',
        button2: 'Phasellus quis lacus quis eros pharetra tristique quis sit amet. ',
        button3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi. ',

        choice1money: +20,
        choice1garbage: 0,
        choice1hapiness: 15,

        choice2money: 20,
        choice2garbage: -10,
        choice2hapiness: 0,

        choice3money: -5,
        choice3garbage: +10,
        choice3hapiness: +0,
      }
    ]
  }
}
