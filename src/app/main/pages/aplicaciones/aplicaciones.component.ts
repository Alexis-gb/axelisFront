import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/interfaces/publicacion.interface';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.css']
})
export class AplicacionesComponent implements OnInit {

  publicaciones:Publicacion[] = [];

  constructor(private publicacionService: PublicacionesService) { }

  ngOnInit(): void {
    this.listarPublicaciones();
  }

  listarPublicaciones() {
    this.publicacionService.getPublicacionesPorSeccion("APLICACIONES").subscribe(resp =>{
      this.publicaciones = resp;
    })
  }

}
