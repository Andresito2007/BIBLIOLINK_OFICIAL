import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navegacion } from '../navegacion/navegacion';
import { PrestamosService } from '../../services/prestamos.service';

@Component({
  selector: 'app-misprestamos',
  imports: [CommonModule, Navegacion, RouterLink],
  templateUrl: './misprestamos.html',
  styleUrl: './misprestamos.css',
})
export class Misprestamos {
  private prestamosService = inject(PrestamosService);
  prestamos = this.prestamosService.prestamos; // OBETENMOS LO DE SERVICIO LA LISTA
}
