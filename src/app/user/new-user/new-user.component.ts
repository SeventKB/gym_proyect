import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MatDialogRef} from '@angular/material/dialog'; 
import { NavigationExtras, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { NewUserService } from 'src/app/service/new-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  hide = true;
  usuario: string = "";

  constructor(private fB: FormBuilder, private router: Router,
     private dialogRef: MatDialogRef<NewUserComponent>,
     private dataService: NewUserService,
     private userService: UserServiceService){}

  usuarioNuevo: FormGroup = this.fB.group({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    rol: 'Miembro',
    contrasenia: new FormControl('', Validators.required)
  });
 

  agregarUsuario(){    
    this.dialogRef.close(this.usuarioNuevo);
    if (this.usuarioNuevo.valid){
      this.usuario = this.usuarioNuevo.get('username')?.value;
      this.dataService.addUser(this.usuarioNuevo.value);  
      alert('Se registro su usuario'); 
      this.userService.loginUser(this.usuario);
      this.router.navigate(['/Pagina-Principal']);
    }
    /*let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.usuarioNuevo.value.cedula,
        nombres: this.usuarioNuevo.value.nombres,
        apellidos: this.usuarioNuevo.value.apellidos,
        direccion: this.usuarioNuevo.value.direccion,
        edad: this.usuarioNuevo.value.edad 
      },
      skipLocationChange: false
    };*/

    /*if (objToSend.queryParams != null){
      this.dataService.addUser(objToSend);      
    }*/

    //this.reloadCurrentRoute(objToSend);
  }


  /*reloadCurrentRoute(objToSend: NavigationExtras) {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => { 
      this.router.navigate([currentUrl], {state: { datosUsuario: objToSend}});
    });
  }*/
}
