import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { ReaccionesComponent } from './pages/reacciones/reacciones.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'publicaciones',
        component: PublicacionesComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'comentarios',
        component: ComentariosComponent
      },
      {
        path: 'reacciones',
        component: ReaccionesComponent
      },
      {
        path: '**',
        redirectTo: 'publicaciones'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
