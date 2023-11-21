import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionRutinasComponent } from './creacion-rutinas.component';

describe('CreacionRutinasComponent', () => {
  let component: CreacionRutinasComponent;
  let fixture: ComponentFixture<CreacionRutinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreacionRutinasComponent]
    });
    fixture = TestBed.createComponent(CreacionRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
