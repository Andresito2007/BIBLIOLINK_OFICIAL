//signal es nuestra caja reactiva que va a guardar nuestros valores cuando estos cambien  
// angular va a actualizar automaticamente todo lo que depende de el 
import { Injectable, signal } from '@angular/core';

//usamos interface porque es un molde que define la forma de un objeto
// mo va a  crear nada  solo definira lo que libro debe tener
export interface Libro {
  id: number;
  titulo: string;
}
//providedIn: 'root' para que sea una sola instancia cualquiers que lo consuma
// va a recibir el mismo objeto m angular lo va a crear solo
@Injectable({ providedIn: 'root' })
export class LibrosService {
  // VA A ESTAR COMO ESTA LISTA
  libros = signal<Libro[]>([
    { id:1, titulo: 'Cien Anos de Soledad' },
    { id:2, titulo: 'El Principito' },
    { id:3, titulo: 'Don Quijote de la Mancha' }
  ]);
  // EMPIEZA EN 4 POR DEFECTO PORQUE YA HEMOS AGREGADO LIBROS ANTERIORMENTE PA PROBAR
  private nextId = 4;
  //CREAMOS NUESTRO METODO AGREGAR LIBRO QUE RECIBIR UN TITULO TIPO STRING
  agregarLibro(titulo: string) {
    // agregamos con update de Signal
    this.libros.update(lista => [...lista, { id: this.nextId++, titulo }]); 
    // .update toma nuestro valor actual lo tranform y devuevlve el nuevo valor
    // ... propogacion = desempaquetamos nuestra lista
  }
  // POR ID DE TIPO NUMERO 
  eliminarLibro(id: number) {
    // filter va recorre la lista y se quedara con los que no tengan esa id dada
    this.libros.update(lista => lista.filter(l => l.id !== id));
  }
  // RESETA LOS LIBROS CUANDO SE CARGANGUE 
  resetearLibros() {
    this.nextId = 4;
    this.libros.set([
      { id: 1, titulo: 'Cien Anos de Soledad' },
      { id: 2, titulo: 'El Principito' },
      { id: 3, titulo: 'Don Quijote de la Mancha' }
    ]);
  }
}
