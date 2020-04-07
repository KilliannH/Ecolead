export interface Scenario {
  name: string;
  entryPoint: number;
  events: Event[];
  baseResources: Resource[];
}

export interface Resource {
  name: string;
  value: number;
}

export interface Game {
  country: string;
  rulerName: string;
  scenario: Scenario;
}

export interface Event {
  id: number;
  description: string;
  text: string;
  actions: Action[];
  delay: number;
  position?: Position;
  nextEventId?: number;
}

export interface Position {
  description: string;
  lat: number;
  lng: number;
}

export interface Effect {
  name: string;
  value: number;
}

export interface Action {
  description: string;
  nextEventId?: number;
  effects: Effect[];
}
