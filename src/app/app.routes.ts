 import { Routes } from '@angular/router';

import { Inicio } from './componentes/inicio/inicio';

import { RegistroLibros } from './componentes/prestamos/registro-libros';

import { Login } from './componentes/login/login';
import { Misprestamos } from './componentes/misprestamos/misprestamos';

import { GestionLibros } from './componentes/gestion-libros/gestion-libros';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'prestamos', component: RegistroLibros },
  { path: 'registro', component: Login },
  { path: 'mis-prestamos', component: Misprestamos },
  { path: 'administracion', component: GestionLibros , canActivate: [authGuard] } // incluimos el guard
];
