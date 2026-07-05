import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Navegacion } from '../navegacion/navegacion';

import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-gestion-libros',
  imports: [FormsModule, CommonModule, Navegacion],
  templateUrl: './gestion-libros.html',
  styleUrl: './gestion-libros.css',
})
export class GestionLibros {
  // FORMA DE DECLARAR VARIABLES LA ESPECIFICA SRINGT NOMREB... Y LA INFERIDAD POR TS NOMBRE = "PEPE"
  librosService = inject(LibrosService);
  nuevoLibro ="";
  // AGREGAMOS NUESTROS METODOS
  agregar() {
    const titulo = this.nuevoLibro.trim();
    if (titulo) {
      this.librosService.agregarLibro(titulo);
      this.nuevoLibro ="";
    }
  }
  eliminar(id: number) {
    this.librosService.eliminarLibro(id);
  }
  resetear() {
    this.librosService.resetearLibros();
  }
}
