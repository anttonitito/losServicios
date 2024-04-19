import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario:Usuario = new Usuario();
  esOscuro: boolean = false;
  constructor() {
    this.usuario.usuarioID = 1;
    this.usuario.nombre = 'Antoni';
    this.usuario.apellido = 'Tito';
   }


   obtenerEstadoOscuro(): boolean {
    return this.esOscuro;
  }
}
