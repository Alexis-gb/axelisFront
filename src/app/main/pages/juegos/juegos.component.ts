import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/interfaces/publicacion.interface';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  publicaciones:Publicacion[] = [];

  constructor(private publicacionService: PublicacionesService) { }

  ngOnInit(): void {
    this.listarPublicaciones();
  }

  listarPublicaciones() {
    this.publicacionService.getPublicacionesPorSeccion("JUEGOS").subscribe(resp =>{
      this.publicaciones = resp;
    })
  }

}
