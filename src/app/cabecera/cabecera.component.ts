import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewUserComponent } from '../user/new-user/new-user.component';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit{

  loggedIn: boolean = false;
  username: string = '';

  constructor(private router:Router,private userService: UserServiceService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getLoggedInState().subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });

    this.userService.getUserName().subscribe((username) => {
      this.username = username;
    });
  }

  openNuevo (){
    this.dialog.open(NewUserComponent);
  }

  logout() {
    this.router.navigate(['/']);
    this.userService.logoutUser();
  }

  openBiblioteca() {
    this.router.navigate(['/Rutina-Miltimedia']);
  }

  openNuevaRutina() {
    this.router.navigate(['/Rutina-Nueva']);
  }
}
