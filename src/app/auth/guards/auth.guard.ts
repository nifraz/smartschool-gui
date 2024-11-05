import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).isLoggedIn()) {
    inject(Router).navigate(['/auth', 'login']);
    return false;
  }
  return true;
};
