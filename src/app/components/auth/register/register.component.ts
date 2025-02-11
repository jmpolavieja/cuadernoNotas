import {Component, inject} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatFabButton} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatFabButton,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formRegistro: FormGroup;
  private auth = inject(AuthService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.formRegistro = this.fb.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  registro() {
    this.auth.registro(this.formRegistro.controls['email'].value, this.formRegistro.controls['password'].value).then(
      () => {
        // Mandar mensaje de ok
        console.log('Registro cargado: ', this.formRegistro.value);
        // enviar a ruta raiz
        this.router.navigate(['/notas']);
      }
    ).catch( err => {
      console.log('Error al cargar enviar el usuario: ', err);
    });
  }
}
