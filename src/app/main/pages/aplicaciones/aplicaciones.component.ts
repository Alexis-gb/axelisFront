import { PublicacionesService } from './../../services/publicaciones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.css']
})
export class AplicacionesComponent implements OnInit {

  publicaciones:[] = [];

  constructor(private publicacionService: PublicacionesService) { }

  ngOnInit(): void {}

  llamarpublicaciones() {
    this.publicacionService.getPublicacionesPorSeccion("PROYECTOS").subscribe(resp =>{
      console.log(resp);
    })
  }

}
