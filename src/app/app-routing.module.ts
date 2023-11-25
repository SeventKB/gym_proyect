import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DashboardGuard } from './dashboard/dashboard-guard';
import { NewUserComponent } from './user/new-user/new-user.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'login', component:DashboardComponent},
  {path:'Pagina-Principal', component:PaginaPrincipalComponent, canActivate:[DashboardGuard]},
  {path:'usuarios', component:ListaUsuariosComponent, canActivate:[DashboardGuard]},
  {path:'registro', component:NewUserComponent},  
  {path:'reservas-entrenador', component:ReservaEntrenadorComponent},
  {path:'calendarios', component:CalendariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
