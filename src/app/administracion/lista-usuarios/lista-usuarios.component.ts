import {Component, inject} from '@angular/core';
import {UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  userService = inject(UsuariosService);
  ngOnInit() {
    console.log(this.userService.usuario);
  }
}
