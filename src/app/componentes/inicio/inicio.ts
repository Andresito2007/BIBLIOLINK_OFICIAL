import { Component } from '@angular/core';
// IMPORTAMOS NUESTRO COMPONENTE DE NAVEGACION PA USARLO
import { Navegacion } from '../navegacion/navegacion';
@Component({
  selector: 'app-inicio',
  imports: [Navegacion], // LO IMPORTAMOS ACA TAMBIEN
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  // CREAMOS NUESTRAS DE TS VARIABLES PARA USAR CON {{}}
  nombre:string="BIBLIOLINK";
}
