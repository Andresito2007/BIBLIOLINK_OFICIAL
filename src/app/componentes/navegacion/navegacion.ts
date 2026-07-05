import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// usamo routerLink que es lo mismo que el href
// usamo routerLinkActive pone una clase css por defecto al link que estamos para que "brille" en esa ruta.
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-navegacion',
  imports: [RouterLink, RouterLinkActive, CommonModule], //LOS IMPORTAMO
  templateUrl: './navegacion.html',
  styleUrl: './navegacion.css',
})
export class Navegacion {
  // HACEMOS UNA INYECCION DEL SERVICO AUTH PARA TRAERLO
  authService = inject(AuthService);
}
