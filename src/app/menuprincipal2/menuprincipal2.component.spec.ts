import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuprincipal2Component } from './menuprincipal2.component';

describe('Menuprincipal2Component', () => {
  let component: Menuprincipal2Component;
  let fixture: ComponentFixture<Menuprincipal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menuprincipal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menuprincipal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
