import { Routes } from '@angular/router';
import {AuthGuard} from '@angular/fire/auth-guard';
import {loginGuard} from './guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/notas/notas.component').then(m => m.NotasComponent),
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
    loadComponent: () => import('./components/auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./components/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
