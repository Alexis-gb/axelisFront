import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AplicacionesComponent } from './pages/aplicaciones/aplicaciones.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostComponent } from './components/post/post.component';
import { ComentarioComponent } from './components/comentario/comentario.component';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    ProyectosComponent,
    AplicacionesComponent,
    JuegosComponent,
    NosotrosComponent,
    ContactanosComponent,
    MenuComponent,
    PostComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
