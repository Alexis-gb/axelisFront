import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AplicacionesComponent } from './pages/aplicaciones/aplicaciones.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'proyectos',
        component: ProyectosComponent
      },
      {
        path: 'aplicaciones',
        component: AplicacionesComponent
      },
      {
        path: 'juegos',
        component: JuegosComponent
      },
      {
        path: 'nosotros',
        component: NosotrosComponent
      },
      {
        path: 'contactanos',
        component: ContactanosComponent
      },
      {
        path: 'publicacion/:id',
        component: PublicacionComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
