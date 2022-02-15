import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPublicacionesPorSeccion(seccion:string) {
    return this.http.get(`${this.baseUrl}publicacion/seccion/${seccion}`);
  }
}
