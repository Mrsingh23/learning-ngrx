import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject101Component } from './subject101.component';

describe('Subject101Component', () => {
  let component: Subject101Component;
  let fixture: ComponentFixture<Subject101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subject101Component]
    });
    fixture = TestBed.createComponent(Subject101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
