import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MatDialogRef} from '@angular/material/dialog'; 
import { NavigationExtras, Router } from '@angular/router';
import { NewUserService } from 'src/app/service/new-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  constructor(private fB: FormBuilder, private router: Router, private dialogRef: MatDialogRef<NewUserComponent>, private dataService: NewUserService)
  {
    
  }

  usuarioNuevo: FormGroup = this.fB.group({
    cedula: new FormControl('', Validators.required),
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required) 
  });
 

  agregarUsuario(){    
    this.dialogRef.close(this.usuarioNuevo);
    if (this.usuarioNuevo.valid){
      this.dataService.addUser(this.usuarioNuevo.value);      
    }
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.usuarioNuevo.value.cedula,
        nombres: this.usuarioNuevo.value.nombres,
        apellidos: this.usuarioNuevo.value.apellidos,
        direccion: this.usuarioNuevo.value.direccion,
        edad: this.usuarioNuevo.value.edad 
      },
      skipLocationChange: false
    };

    /*if (objToSend.queryParams != null){
      this.dataService.addUser(objToSend);      
    }*/

    this.reloadCurrentRoute(objToSend);
  }


  reloadCurrentRoute(objToSend: NavigationExtras) {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => { 
      this.router.navigate([currentUrl], {state: { datosUsuario: objToSend}});
    });
  }
}
