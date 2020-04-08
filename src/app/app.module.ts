import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { GameComponent } from './game/game.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { CreditsComponent } from './credits/credits.component';
import { HudComponent } from './hud/hud.component';

import { DialogGameEventDialog } from './game/dialog/DialogGameEventDialog';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MapComponent,
    NavbarComponent,
    LandingComponent,
    CreditsComponent,
    HudComponent,
    DialogGameEventDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
