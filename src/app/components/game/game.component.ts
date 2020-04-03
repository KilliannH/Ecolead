import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Loader, LoaderOptions} from 'google-maps';

import { ViewChild } from '@angular/core';
import LatLng = google.maps.LatLng;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  options: LoaderOptions;
  loader: Loader;

  map: google.maps.Map;
  lat: number = 40.730610;
  lng: number = -73.935242;
  coordinates: LatLng = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions;
  marker: google.maps.Marker;

  constructor() { }

  ngOnInit(): void {
    this.options = {/* todo */};
    // this.loader = new Loader(/* myAPiKey */, this.options);
    this.mapOptions = {
      center: this.coordinates,
      zoom: 8,
    };
  }

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer() {
    this.loader.load().then(() => {
      this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
      this.marker = new google.maps.Marker({
        position: this.coordinates,
        map: this.map,
      });
    });
  }



}
