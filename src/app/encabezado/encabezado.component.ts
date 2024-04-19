import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  
  constructor(private UsuarioInyectado: UsuarioService) { 
  }

  ngOnInit() {
    console.log(this.UsuarioInyectado.usuario.nombre);
  }

  esOscuroBtn(oscuro:boolean){

   
    this.UsuarioInyectado.esOscuro= !oscuro;

    if(this.UsuarioInyectado.esOscuro){
      document.body.classList.remove("bg-light");
      document.body.classList.add("bg-dark");
      
    }else{
      document.body.classList.remove("bg-dark");
      document.body.classList.add("bg-light");
      
    }
  }

  
}
