import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behavior101Component } from './behavior101.component';

describe('Behavior101Component', () => {
  let component: Behavior101Component;
  let fixture: ComponentFixture<Behavior101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Behavior101Component]
    });
    fixture = TestBed.createComponent(Behavior101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
