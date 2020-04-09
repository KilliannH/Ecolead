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
        title: 'Recyclage',
        description: this.localService.commander_name + " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec efficitur risus. Vivamus non aliquet justo, eget auctor purus. Cras ullamcorper posuere sapien eu lobortis.",
        image: 'https://cdn.pixabay.com/photo/2016/11/29/10/02/pile-1868894_960_720.jpg',
        button1: 'Nam nec luctus eros, at consequat ligula. Proin ullamcorper ante vel risus blandit',
        button2: 'Aenean convallis vitae magna id scelerisque. Aliquam elementum consequat',
        button3: 'Orci varius natoque penatibus et magnis',

        choice1money: 10,
        choice1garbage: -10,
        choice1hapiness: 0,

        choice2money: 10,
        choice2garbage: -10,
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
      },
      {
        id: 3,
        title: 'Nettoyage',
        description:  this.localService.commander_name + ' Maecenas eget tincidunt ipsum. Sed at felis sit amet ante tempus sagittis eget ut dui. ',
        image: 'https://cdn.pixabay.com/photo/2018/11/30/20/49/auto-3848591_960_720.jpg',
        button1:' Praesent congue lectus sit amet ante consequat maximus. ',
        button2: 'Etiam rhoncus id justo auctor bibendum. Donec lectus tellus, venenatis in metus sit amet ',
        button3: 'Vestibulum vehicula ante arcu. In pretium turpis diam, in semper orci pellentesque sed.  ',

        choice1money: -15,
        choice1garbage: -15,
        choice1hapiness: 15,

        choice2money: 10,
        choice2garbage: -10,
        choice2hapiness: 0,

        choice3money: +10,
        choice3garbage: +10,
        choice3hapiness: +20,
      }

    ]
  }
}
