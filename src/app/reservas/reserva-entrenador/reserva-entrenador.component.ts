import { Component } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormGroup, FormControl} from '@angular/forms';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-reserva-entrenador',
  templateUrl: './reserva-entrenador.component.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
  styleUrls: ['./reserva-entrenador.component.css']
})
export class ReservaEntrenadorComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  firstFormGroup = this._formBuilder.group({
    //firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    //secondCtrl: ['', Validators.required],
  });
  
  constructor(private _formBuilder: FormBuilder) {}

  reservarE(){
    alert('Ha llenado correctamente la información');
  }
}
