import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasMultimediaComponent } from './rutinas-multimedia.component';

describe('RutinasMultimediaComponent', () => {
  let component: RutinasMultimediaComponent;
  let fixture: ComponentFixture<RutinasMultimediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinasMultimediaComponent]
    });
    fixture = TestBed.createComponent(RutinasMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
