import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './components/landingpage/landingpage.component';
import {GameComponent} from './game/game.component';
import {CreditsComponent} from './credits/credits.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'game', component: GameComponent},
  {path: 'credits', component: CreditsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
