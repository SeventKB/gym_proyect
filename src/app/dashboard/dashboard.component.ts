import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { NewUserService } from '../service/new-user.service';

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

  
  constructor(private router: Router,private formBuilder: FormBuilder, 
              private userService: UserServiceService, private datos: NewUserService)
    {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      contraseña: ['', Validators.required],
    });
  }

  mostrarMensaje(){
    this.username = this.form.get('usuario')?.value;
    this.clave = this.form.get('contraseña')?.value;
    let len = this.datos.getUsers().length;
    if(this.form.invalid){
      alert('Debe llenar correctamente los campos');
    }
    for(let i=0; i < len; i++)
    {
      if (this.form.valid) {             
        if(this.username == this.datos.getUsers().at(i).email ){
          if(this.clave == this.datos.getUsers().at(i).contrasenia){
            alert('Ha presionado Aceptar');
            this.loggedIn = true;
            console.log(this.username);
            this.userService.loginUser(this.username);
            this.router.navigate(['/Pagina-Principal']);
            break;
          }
        }
      } 
    }
    if(!this.loggedIn){
      alert('Email o contraseña incorrectos');
    }
  }

  openNuevo (){
    this.router.navigate(['/registro']);
  }

  Cancelar(){
    this.form.reset();
  }
}
