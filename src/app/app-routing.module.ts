import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RutinasMultimediaComponent } from './rutinas-multimedia/rutinas-multimedia.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'Pagina-Principal', component:PaginaPrincipalComponent},
  {path:'Rutina-Miltimedia', component:RutinasMultimediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
