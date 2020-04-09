import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './components/landingpage/landingpage.component';
import {GameComponent} from './components/game/game.component';
import {CreditsComponent} from './components/credits/credits.component';
import {CommanderComponent} from './components/commander/commander.component';
import { EventsComponent } from './components/game/events/events.component';
import {GamefinishedComponent} from "./components/game/gamefinished/gamefinished.component";
import {VictoryComponent} from "./components/game/victory/victory.component";


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'game', component: GameComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'commander', component: CommanderComponent},
  {path: 'events/:id', component: EventsComponent},
  {path: 'gamefinished', component: GamefinishedComponent},
  {path: 'victory', component: VictoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
