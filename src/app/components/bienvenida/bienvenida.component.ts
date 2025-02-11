import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UsuariosService} from '../../administracion/usuarios.service';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {

}
