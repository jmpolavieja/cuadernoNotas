import { Routes } from '@angular/router';
import {loginGuard} from './guards/login.guard';
import {BienvenidaComponent} from './components/bienvenida/bienvenida.component';
import {isAdminGuard} from './guards/is-admin.guard';

export const routes: Routes = [
  {
    path: '', component: BienvenidaComponent
  },
  {
    path: 'notas',
    loadComponent: () => import('./components/notas/notas.component').then(m => m.NotasComponent),
    canActivate: [loginGuard]
  },
  {
    path: 'nuevaNota',
    loadComponent: () => import('./components/detalle-nota/detalle-nota.component').then(m => m.DetalleNotaComponent),
    canActivate: [loginGuard]
  },
  {
    path: 'detalle-nota/:id',
    loadComponent: () => import('./components/detalle-nota/detalle-nota.component').then(m => m.DetalleNotaComponent),
    canActivate: [loginGuard]
  },
  {
    path: 'posts',
    loadComponent: () => import('./components/posts/posts.component').then(m => m.PostsComponent),
    canActivate: [loginGuard]
  },
  {
    path: 'auth',
    loadComponent: () => import('./components/auth/auth.component').then(m => m.AuthComponent),
    canActivate: [isAdminGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule),
    canActivate: [isAdminGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
