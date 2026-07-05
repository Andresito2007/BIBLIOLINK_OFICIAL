
import { Injectable, signal } from '@angular/core';

//Las interfaces en TypeScript sirven para definir la forma de un objeto como que campos tiene y de qué tipo es cada uno.
export interface Prestamo {
  libro: string;
  dni: string;
  nombre: string;
  apellido: string;
  duracion: number;
  fecha: Date;
  fechaDevolucion: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  // SIGNAL ES NUESTRA CAJA REACTIVA QUE DENTRO DE ESTA VA TENER UN 
  // ARRAY DE OBJETOS QUE ESTAARA POR DEFECTRO VACIA
  prestamos = signal<Prestamo[]>([]);
  // CREAMOS NUESTRO MEOTOD AGREGAR PRESTAMOS QUE VA RECIBIR TIPO PRESTAMOS (INTERFACE PPRESTAMOS)
  agregarPrestamo(prestamo: Prestamo) {
    //
    this.prestamos.update(lista => [...lista, prestamo]);
  }
}
