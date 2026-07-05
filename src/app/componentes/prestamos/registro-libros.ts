import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { Navegacion } from '../navegacion/navegacion';

import { PrestamosService } from '../../services/prestamos.service';

import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-registro-libros',
  imports: [FormsModule, CommonModule, Navegacion], // LO IMPORTAMOS ACA TAMBIEN
  templateUrl: './registro-libros.html',
  styleUrl: './registro-libros.css',
})

// EXPORTAMOS NUESTRA CLASE PARA PODER IMPORTARLA
export class RegistroLibros {
  // DURACION POR DEFECTO QUE VA SER DE 7
  duracion = 7;

  librosService = inject(LibrosService);
  private prestamosService = inject(PrestamosService);
  private router = inject(Router);

  // ARMAMOS NUESTRO OBJETO PA GUARDAR EL PRESTAMO
  prestamo = {
    libro: '',
    dni: '',
    nombre: '',
    apellido: ''
  };
  // CREAMOS NUESTRP METODO PARA REGISTRAR LA SOLI DE PRESTAMO
  registrarPrestamo() {
    const hoy = new Date();
    const devolucion = new Date(hoy);
    devolucion.setDate(devolucion.getDate() + this.duracion);

    this.prestamosService.agregarPrestamo({
      ...this.prestamo,
      duracion: this.duracion,
      fecha: hoy,
      fechaDevolucion: devolucion
    });

    alert('Prestamo registrado para: ' + this.prestamo.nombre);
    this.router.navigate(['/mis-prestamos']);
  }
}
