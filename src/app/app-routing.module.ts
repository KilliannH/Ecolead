import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './components/landingpage/landingpage.component';
import {GameComponent} from './game/game.component';
import {CreditsComponent} from './credits/credits.component';


const routes: Routes = [
  {path: 'landing', component: LandingPageComponent},
  {path: 'game', component: GameComponent},
  {path: 'credits', component: CreditsComponent},

  {path: '', redirectTo: '/landing', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
