import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

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

  //
  routeRedirect = '';
  
  constructor(private router: Router,private formBuilder: FormBuilder, private userService: UserServiceService)
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
      if(this.username== "gym@edu.ec" || this.username == "admin@ug.edu.ec" ){
        if(this.clave == "12345" || this.clave == "admin"){
          alert('Ha presionado Aceptar');
          console.log(this.username);
          this.userService.loginUser(this.username);
          this.routeRedirect = this.userService.urlUsuarioIntentaAcceder;
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
    this.router.navigate(['/registro']);
  }

  Cancelar(){
    this.form.reset();
  }
}
