import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/interfaces/publicacion.interface';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  publicaciones:Publicacion[] = [];

  constructor(private publicacionService: PublicacionesService) { }

  ngOnInit(): void {
    this.listarPublicaciones();
  }

  listarPublicaciones() {
    this.publicacionService.getPublicacionesPorSeccion("PROYECTOS").subscribe(resp =>{
      this.publicaciones = resp;
    })
  }
}
