import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NewUserService } from '../service/new-user.service';
import { EditUserComponent } from '../user/edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {
  loggedIn: boolean = false;
  username: string = '';
  nav: any;
  nuevoUsuario: any;
  data: any[] = [];

  constructor(private router:Router, private userService: UserServiceService, 
              private dataService: NewUserService, private dialog: MatDialog) 
    { 
    //this.nav = this.router.getCurrentNavigation();
    //this.nuevoUsuario = this.nav.extras.state;
    
    if (this.dataService.getUsers().length > 0)
    {
      //this.data.push(this.nuevoUsuario.datosUsuario.queryParams);
      const len = this.dataService.getUsers().length
      for (let index = 0; index < len; index++) {
        this.data.push(this.dataService.getUsers().at(index));
        
      }
      console.log(this.data);
    }
  }

  displayedColumns: string[] = ['nombres', 'apellidos', 'username', 'email', 'rol', 'acciones'];
  dataSource = new MatTableDataSource(this.data);

  ngOnInit() {
    this.userService.getLoggedInState().subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });

    this.userService.getUserName().subscribe((username) => {
      this.username = username;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUser(index: number){
    this.dataService.eliminarUser(index);
    this.data = [];
    const len = this.dataService.getUsers().length
      for (let i = 0; i < len; i++) {
        this.data.push(this.dataService.getUsers().at(i));
        
      }
    this.dataSource = new MatTableDataSource(this.data);

  }

  editarUser(data: any, index: number){
    this.dataService.setUserEdit(index);
    this.dialog.open(EditUserComponent, {
      data,
    });
    this.data = [];
    const len = this.dataService.getUsers().length
      for (let i = 0; i < len; i++) {
        this.data.push(this.dataService.getUsers().at(i));
        
      }
    this.dataSource = new MatTableDataSource(this.data);
  }
  
}
