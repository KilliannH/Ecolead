import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamefinishedComponent } from './gamefinished.component';

describe('GamefinishedComponent', () => {
  let component: GamefinishedComponent;
  let fixture: ComponentFixture<GamefinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamefinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamefinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
