import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { NewUserComponent } from '../user/new-user/new-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  hide = true;
  form: FormGroup;
  loggedIn = false;
  username: string = '';
  userData = {
    name: 'Usuario Quemado',
  };
  clave: any;
  
  constructor(private router: Router,private formBuilder: FormBuilder, private userService: UserServiceService,
    private dialog: MatDialog)
    {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      contraseña: ['', Validators.required],
    });
  }
  mostrarMensaje(){
    if (this.form.valid) {
      this.loggedIn = true;
      this.username = this.form.get('usuario')?.value;
      this.clave = this.form.get('contraseña')?.value;
      if(this.username== "gym@edu.ec" ){
        if(this.clave == "12345"){
          alert('Ha presionado Aceptar');
          console.log(this.username);
          this.userService.loginUser(this.username);
          this.router.navigate(['/Pagina-Principal']);
        }else{
          alert('Contraseña incorrecta');
        }
      }else{
        alert('Datos incorrectos');
      }
    } else {
      alert('Debe llenar correctamente los campos');
    }
  }

  openNuevo (){
    this.dialog.open(NewUserComponent);
  }

  Cancelar(){
    this.form.reset();
  }
}
