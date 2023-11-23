import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DashboardGuard } from './dashboard/dashboard-guard';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'Pagina-Principal', component:PaginaPrincipalComponent, canActivate:[DashboardGuard]},
  {path:'usuarios', component:ListaUsuariosComponent, canActivate:[DashboardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
