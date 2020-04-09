import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './components/landingpage/landingpage.component';
import {GameComponent} from './components/game/game.component';
import {CreditsComponent} from './components/credits/credits.component';
import {CommanderComponent} from './components/commander/commander.component';
import { EventsComponent } from './components/game/events/events.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'game', component: GameComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'commander', component: CommanderComponent},
  {path: 'events', component: EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
