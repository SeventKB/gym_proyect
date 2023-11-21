import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { RutinasMultimediaComponent } from './rutinas-multimedia/rutinas-multimedia.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { CreacionRutinasComponent } from './Rutinas/creacion-rutinas/creacion-rutinas.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    DashboardComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    NewUserComponent,
    EditUserComponent,
    RutinasMultimediaComponent,
    CreacionRutinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
