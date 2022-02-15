import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { ReaccionesComponent } from './pages/reacciones/reacciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsuariosComponent,
    PublicacionesComponent,
    ComentariosComponent,
    ReaccionesComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
