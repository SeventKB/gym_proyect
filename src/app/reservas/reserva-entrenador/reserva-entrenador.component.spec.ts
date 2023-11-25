import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaEntrenadorComponent } from './reserva-entrenador.component';

describe('ReservaEntrenadorComponent', () => {
  let component: ReservaEntrenadorComponent;
  let fixture: ComponentFixture<ReservaEntrenadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaEntrenadorComponent]
    });
    fixture = TestBed.createComponent(ReservaEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
