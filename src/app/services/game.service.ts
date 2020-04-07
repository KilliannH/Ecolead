import { Injectable } from '@angular/core';
import { Scenario, Game, Event, Action, Resource } from '../models/Interfaces';
//@ts-ignore
import * as scenarioFile from '../../assets/scenario.json';
import { EventEmitter } from 'events';
import { group } from '@angular/animations';

const scenario = (scenarioFile as any).default as Scenario;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private loadedGame: Game;
  public eventEmitter: EventEmitter;

  private _actualEventId: number;
  public get actualEventId(): number {
    return this._actualEventId;
  }

  public get scenario(): Scenario {
    return this.loadedGame.scenario;
  }

  public gameResources: Resource[];

  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  isLoaded(): boolean {
    return this.loadedGame != undefined;
  }

  loadGame(country: string, rulerName: string): Game {
    this.loadedGame = {
      scenario: { ...scenario },
      country,
      rulerName,
    };

    this.gameResources = [...scenario.baseResources];

    return this.loadedGame;
  }

  startGame() {
    this.changeEvent(this.loadedGame.scenario.entryPoint);
  }

  changeEvent(eventId: number) {
    if (eventId === -1) {
      console.log('GAME FINISHED');

      this.eventEmitter.emit('gameFinished');
    } else {
      this._actualEventId = eventId;

      this.eventEmitter.emit('eventChanged');
    }
  }

  findEvent(eventId: number): Event {
    return this.scenario.events.find((e) => e.id === eventId);
  }

  onActionSelect(event: Event, actionIndex: number) {
    console.log(this.gameResources);
    const action = event.actions[actionIndex];

    for (const effect of action.effects) {
      let r = this.gameResources.find((gR) => gR.name === effect.name);
      r.value += effect.value;
    }

    setTimeout(() => {
      console.log(this.gameResources);

      if (event.nextEventId) {
        this.changeEvent(event.nextEventId);
      } else {
        this.changeEvent(action.nextEventId);
      }
    }, event.delay);
  }

  calculateScore() {
    return this.gameResources.reduce((a, b) => a + (b['value'] || 0), 0);
  }
}
