import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.verificarIngreso();
  }

  verificado:boolean = true;
  admin:boolean = false;

  verificarIngreso(){
    if(!localStorage.getItem('token')){console.log("No tiene token"); return;}
    this.auth.verificarAuth(1).subscribe(resp => {
      console.log("usuario", resp);
      this.verificado = !resp;
    });
    this.auth.verificarAuth(2).subscribe(resp => {
      console.log("admin", resp);
      this.admin = resp;
    });
  }

}
