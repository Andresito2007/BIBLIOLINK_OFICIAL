import { CanActivateFn , Router } from '@angular/router';

import { inject } from '@angular/core';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  // SI ES ADMIN RETORNA VERDEDOR
  if (authService.esAdmin()) {
    return true;
  }
  // SI NO MANDALO A INCIIO
  return router.createUrlTree(['/inicio']);
};
