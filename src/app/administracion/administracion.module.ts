import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {DetalleUserComponent} from './detalle-user/detalle-user.component';
import {UsuariosService} from './usuarios.service';
import {MatList} from '@angular/material/list';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    DetalleUserComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MatList
  ],
  providers: [
    UsuariosService,
  ]
})
export class AdministracionModule { }
