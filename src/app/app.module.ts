import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landingpage/landingpage.component';
import { CreditsComponent } from './components/credits/credits.component';
import { HeaderComponent } from './components/landingpage/header/header.component';
import { MainButtonsComponent } from './components/landingpage/mainbuttons/mainbuttons.component';
import { GameComponent } from './components/game/game.component';
import { CommanderComponent } from './components/commander/commander.component';
import { MapComponent } from './components/game/map/map.component';
import { RessourcesComponent } from './components/game/ressources/ressources.component';
import { EventsComponent } from './components/game/events/events.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    MainButtonsComponent,
    CreditsComponent,
    GameComponent,
    HeaderComponent,
    CommanderComponent,
    MapComponent,
    RessourcesComponent,
    EventsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
