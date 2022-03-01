import { PublicacionesService } from './../../../services/publicaciones.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Publicacion } from 'src/app/interfaces/publicacion.interface';
import { Comentario } from 'src/app/interfaces/comentario.interface';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicacion!:Publicacion;
  comentarios:Comentario[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private publicacionesService:PublicacionesService
    ) {

    }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({id}) => this.publicacionesService.getPublicacionPorId(id))).subscribe(publicacion => this.publicacion = publicacion);
    this.activatedRoute.params.pipe(switchMap(({id}) => this.publicacionesService.getComentariosPorPublicacion(id))).subscribe(comentarios => this.comentarios = comentarios);
  }

}
