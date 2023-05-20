import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModel101Component } from './ng-model101.component';

describe('NgModel101Component', () => {
  let component: NgModel101Component;
  let fixture: ComponentFixture<NgModel101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgModel101Component]
    });
    fixture = TestBed.createComponent(NgModel101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
