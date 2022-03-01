import { Token } from './../interfaces/token.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { tap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;

  private usuario: Usuario | undefined;

  private token: string | undefined;

  get getToken(){
    return this.token;
  }

  constructor(private http:HttpClient) { }

  verificarAuth(nivel:number):Observable<boolean>{

    if(!localStorage.getItem('token')){
      return of(false);
    }

    const headers = new HttpHeaders()
      .set("auth", localStorage.getItem('token')!);

    return this.http.post<boolean>(`${this.baseUrl}api/usuario/verificarAcceso`, nivel, {headers})
    .pipe(
      tap(resp => {
        console.log("En authService:", resp);
        return resp;
      })
    );
  }

  login(usuario:Usuario){
    console.log('Así llega', usuario);
    return this.http.post<Token>(`${this.baseUrl}api/auth/login`, {correo:usuario.correo, contrasena:usuario.contrasena}, {observe: 'response'}).pipe(
      tap(resp => {
        if(resp.status != 200){return;}
        localStorage.setItem('token', resp.body?.token!);
        this.usuario = usuario;
      })
    );
  }

  registro(usuario:Usuario){
    console.log(usuario);
    return this.http.post<Usuario>(`${this.baseUrl}api/usuario/registro`, usuario, {observe: 'response'}).pipe(
      tap(resp => {
        if(resp.status != 201){
          console.log("No se ha podido registrar.");
          return;
        }
        console.log("Usuario registrado: ", usuario.correo);
      })
    );
  }
}
