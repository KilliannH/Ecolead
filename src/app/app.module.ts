import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landingpage/landingpage.component';
import { CreditsComponent } from './credits/credits.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    CreditsComponent,
    GameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
