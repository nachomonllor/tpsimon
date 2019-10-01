import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilidadaritmeticaComponent } from './agilidadaritmetica.component';

describe('AgilidadaritmeticaComponent', () => {
  let component: AgilidadaritmeticaComponent;
  let fixture: ComponentFixture<AgilidadaritmeticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilidadaritmeticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilidadaritmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
