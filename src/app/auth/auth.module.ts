import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { FormIngresoComponent } from './components/form-ingreso/form-ingreso.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FormRegistroComponent,
    FormIngresoComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
