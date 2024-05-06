import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { inject } from '@angular/core';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.userLoggedIn()) {
    router.navigate(['home-page']);
    return false;
  } else {
    return true;
  }
  };
