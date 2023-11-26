import { Component, OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendariosComponent } from '../reservas/calendarios/calendarios.component';




@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit{
  loggedIn: boolean = false;
  username: string = '';

  constructor(private userService: UserServiceService, private router:Router, private dialog: MatDialog) 
    { 
    //this.nav = this.router.getCurrentNavigation();
    //this.nuevoUsuario = this.nav.extras.state;
  }

  ngOnInit() {
    this.userService.getLoggedInState().subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });

    this.userService.getUserName().subscribe((username) => {
      this.username = username;
    });
  }
  openReserva(){
    this.router.navigate(["/reservas-entrenador"]);
  }

  openCalendario(){
    this.dialog.open(CalendariosComponent);
  }
}
