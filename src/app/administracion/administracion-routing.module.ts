import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaUsuariosComponent} from './lista-usuarios/lista-usuarios.component';
import {AuthGuard} from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', component: ListaUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
