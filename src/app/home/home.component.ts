import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/aticulo';
import { UsuarioService } from '../Services/usuario.service';
import { ArticulosService } from '../Services/articulos.service';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();
  esOscuro: boolean;
  constructor(private UsuarioInyectado: UsuarioService, private ArticuloInyectado: ArticulosService, private Ruta: Router) {
   
   }

  ngOnInit() {
    this.articulos.push(
      {
      titulo: 'Curso de Typescript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem.',
      fecha: new Date(),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
      },
      {
      titulo: 'Curso de Angular',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem.',
      fecha: new Date('04/25/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
      },
      {
      titulo: 'Curso de Flutter',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png'
      },
      {
      titulo: 'Curso de Java',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
      titulo: 'Curso de Javascript',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum illum fuga. Officiis nam animi iure iste voluptatibus cupiditate ipsum esse. Repellat enim nostrum voluptatem ratione accusantium id cupiditate rem. ',
      fecha: new Date('12/23/2024'),
      usuario: ` ${this.UsuarioInyectado.usuario.nombre}  ${this.UsuarioInyectado.usuario.apellido}`,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
          
      
  )
  this.esOscuro = this.UsuarioInyectado.esOscuro;
  }




  irAlDetalle(articulo: Articulo){
    this.ArticuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('articuloDetalle');
  }

}
