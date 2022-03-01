import { AuthService } from 'src/app/services/auth.service';
import { Comentario } from '../interfaces/comentario.interface';
import { Publicacion } from 'src/app/interfaces/publicacion.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private authServices:AuthService
    ) { }

  crear(publicacion:Publicacion):Observable<Publicacion>{
    const headers = new HttpHeaders()
      .set("auth", localStorage.getItem('token')!);

    return this.http.post<Publicacion>(`${this.baseUrl}api/publicacion/crear`, publicacion, {headers}).pipe(
      tap(resp => {
        return resp;
      })
    )
  }

  getPublicaciones():Observable<Publicacion[]>{
    return this.http.get<Publicacion[]>(`${this.baseUrl}api/publicacion/listar`);
  }

  getPublicacionesPorSeccion(seccion:string):Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${this.baseUrl}api/publicacion/seccion/${seccion}`);
  }

  getPublicacionPorId(id:number):Observable<Publicacion>{
    return this.http.get<Publicacion>(`${this.baseUrl}api/publicacion/post/${id}`);
  }

  getComentariosPorPublicacion(id:number):Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.baseUrl}api/comentario/listarDePublicacion/${id}`);
  }

  editar(publicacion:Publicacion):Observable<Publicacion>{
    const headers = new HttpHeaders()
      .set("auth", localStorage.getItem('token')!);

    return this.http.put<Publicacion>(`${this.baseUrl}api/publicacion/actualizar`, publicacion, {headers}).pipe(
      tap(resp => {
        return resp;
      })
    )
  }

  eliminar(id:number):Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    const headers = new HttpHeaders()
      .set("auth", localStorage.getItem('token')!);

    return this.http.delete<boolean>(`${this.baseUrl}api/publicacion/eliminar/${id}`, {headers}).pipe(
      tap(resp => {
        console.log("Eliminada: ", id);
        return of(resp);
      })
    )
  }
}
