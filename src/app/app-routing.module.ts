import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './components/landingpage/landingpage.component';
import {GameComponent} from './components/game/game.component';
import {CreditsComponent} from './components/credits/credits.component';
import {CommanderComponent} from './components/commander/commander.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'game', component: GameComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'gamegovernor', component: CommanderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
