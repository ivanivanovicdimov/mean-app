import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFighterComponent } from './view-fighter.component';

describe('ViewFighterComponent', () => {
  let component: ViewFighterComponent;
  let fixture: ComponentFixture<ViewFighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
