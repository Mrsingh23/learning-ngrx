import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Replay101Component } from './replay101.component';

describe('Replay101Component', () => {
  let component: Replay101Component;
  let fixture: ComponentFixture<Replay101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Replay101Component]
    });
    fixture = TestBed.createComponent(Replay101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
