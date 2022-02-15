import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(){
    return this.http.get(`${this.baseUrl}login`);
  }
}
