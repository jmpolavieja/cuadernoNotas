import {inject, Injectable} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  User
} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Nota} from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // 1. inyectar Auth de firebase
  private auth = inject(Auth);
  private router = inject(Router);
  user$: Observable<User | null>; // Mi propiedad user$ que usaré para subscribirme al servicio

  // 1.1 Inicializar usuario
  constructor() {
    this.user$ = user(this.auth); // Manera de subscribirse al user$ del servicio

  }

  // 2. Módulo: Registro con inicio de sesión
  async registro(email: string, password: string) {
    try {

      await createUserWithEmailAndPassword(this.auth, email, password)
      this.router.navigate(['/notas']);
    } catch (error) {
      console.log(error);
    }
  }

  // 3. Módulo: Iniciar sesión
  async login(email: string, password: string) {
    try {
      // let credenciales: any; según gpt no necesario
      await signInWithEmailAndPassword(this.auth, email, password).then( result => {
        if (result) {
          return result;
        } else {
          return false;
        }
      });
      // console.log("Credenciales cargado: ", credenciales.user);;
      this.router.navigate(['/notas']);
    } catch (e) {
      console.error();
    }
  }

  // 4. Módulo: Cerrar sesión
  async logout() {

    await signOut(this.auth);
    this.router.navigate(['/auth']);
  }
}
