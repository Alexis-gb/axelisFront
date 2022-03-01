import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsuarioPorId(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseUrl}api/usuario/id/${id}`);
  }
}
