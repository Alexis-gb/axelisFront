export interface Publicacion{
  id:number;
  seccion?:Seccion;
  titulo:string;
  descripcion:string;
  fecha:string;
  autor:number;
  imgUrl?:string
}

export enum Seccion{
  PROYECTOS = 'Proyectos',
  APLICACIONES = 'Aplicaciones',
  JUEGOS = 'Juegos'
}
