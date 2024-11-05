import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const accountGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isLoggedIn()) {
    inject(Router).navigate(['/']);
    return false;
  }
  return true;
};
