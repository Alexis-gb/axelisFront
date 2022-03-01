import { Component, Input } from '@angular/core';
import { Publicacion } from 'src/app/interfaces/publicacion.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() publicacion!:Publicacion;

}
