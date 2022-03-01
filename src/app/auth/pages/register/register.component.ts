import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router:Router) { }

  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', [Validators.required, Validators.minLength(8)]],
  })

  correoNoDisponible:boolean = false;

  verify(campo:string){
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  registrar(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value);
    this.authService.registro(this.formulario.value).subscribe(resp => {
      if(resp.status != 201){
        this.correoNoDisponible = true;
        return;
      }
      this.router.navigate(['./auth/ingreso'])
    });
  }
}
