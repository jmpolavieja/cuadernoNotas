import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {ApijavaService} from '../services/apijava.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const userService = inject(ApijavaService);
  const router = inject(Router);
  return true;
  /*if(userService.user.rol === 'admin') {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }*/

};
