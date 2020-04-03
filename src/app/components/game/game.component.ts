import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Loader, LoaderOptions} from 'google-maps';

import { ViewChild } from '@angular/core';
import {Config} from '../../../config';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  options: LoaderOptions;
  loader: Loader;

  constructor() { }

  ngOnInit(): void {
    this.options = {/* todo */};
    this.loader = new Loader(Config.GOOGLE_API_KEY, this.options);
  }

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer() {
    this.loader.load().then((google) => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
      });
    });
  }



}
