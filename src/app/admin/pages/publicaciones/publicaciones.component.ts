import { Publicacion } from 'src/app/interfaces/publicacion.interface';
import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones:Publicacion[] = [];
  panelConfirmacion:boolean = false;
  submit = "crear";
  realizado:boolean = false;
  panelCreacion:boolean = false;
  publicacionEliminar:number = 0;
  accion:string = "";

  publicacion!:Publicacion;

  formulario: FormGroup = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(6)]],
    seccion: ['', [Validators.required]],
    descripcion: ['', [Validators.required, Validators.maxLength(250)]],
    fecha:['', [Validators.required]],
    autor:['', [Validators.required, Validators.min(1)]]

  })

  constructor(
    private publicacionService:PublicacionesService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.listarPublicaciones();
  }

  listarPublicaciones() {
    this.publicacionService.getPublicaciones().subscribe(resp =>{
      this.publicaciones = resp;
    })
  }

  mostrarPanelCrear(){
    this.submit = "crear";
    this.realizado = false;
    this.panelCreacion = true;
  }

  crear(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    this.panelCreacion = false;

    this.publicacionService.crear(this.formulario.value).subscribe(resp => {
      if(!resp.id){
        return;
      }
      this.listarPublicaciones();
    });

    this.realizado = true;
    this.accion = "creado";
    this.formulario.reset();
  }

  llamarEditar(id:number){
    this.realizado = false;
    this.publicacionService.getPublicacionPorId(id).subscribe(resp => {
      if(!resp.id){
        return;
      }
      this.publicacion = resp;
      this.formulario.setValue({
        "titulo":resp.titulo,
        "seccion":resp.seccion,
        "descripcion":resp.descripcion,
        "fecha":resp.fecha,
        "autor":resp.autor
      });
      this.submit = 'editar';
      this.panelCreacion = true;
    });


  }

  modificar(){
    const pubFormulario:Publicacion = this.formulario.value;
    const publicacion:Publicacion = {
      id: this.publicacion.id,
      seccion: pubFormulario.seccion,
      titulo: pubFormulario.titulo,
      descripcion: pubFormulario.descripcion,
      fecha: pubFormulario.fecha,
      autor: pubFormulario.autor
    };
    this.publicacionService.editar(publicacion).subscribe(resp => {
      if(!resp.id){
        return;
      }
      this.listarPublicaciones();
    });

    this.accion = "modificado";
    this.realizado = true;

    this.panelCreacion = false;
    this.formulario.reset;
  }

  confirmacion(id:number){
    this.realizado = false;
    this.panelConfirmacion = true;
    this.publicacionEliminar = id;
  }

  cancelar(){
    this.panelConfirmacion = false;
    this.publicacionEliminar = 0;
  }

  aceptar(id:number){
    this.eliminar(id);
    this.panelConfirmacion = false;
  }

  eliminar(id:number){
    this.publicacionService.eliminar(id).subscribe(resp =>{
      console.log("Recargando publicaciones...");
      if(resp){this.listarPublicaciones();}
    });
    this.accion = "eliminado";
    this.realizado = true;
  }

  verify(campo:string){
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

}
