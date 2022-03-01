import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router:Router) { }

  formulario: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', [Validators.required, Validators.minLength(8)]]
  })

  verify(campo:string){
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  login(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value);
    this.authService.login(this.formulario.value).subscribe(resp => {
      if(resp.status != 200){
        // TODO: Hacer el caso de fallo
        return;
      }
      this.router.navigate(['./inicio'])
    });
  }
}
