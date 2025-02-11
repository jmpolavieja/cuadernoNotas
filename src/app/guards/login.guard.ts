import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Auth, user} from '@angular/fire/auth';
import {map} from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return user(auth).pipe(
    map(user => {
      if(user) {
        return true;
      } else {
        router.navigate(['/auth']);
        return false;
      }
    }),
  );
};
