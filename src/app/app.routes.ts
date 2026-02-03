import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { IntroGuard } from './guards/intro-guard';

//agregar el guard de login
export const routes: Routes = [

  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full',
  },

  {
    path: 'intro',
    loadComponent: () => import('./intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage),
    children:[
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
    ]
  },   {
    path: 'songs-modal',
    loadComponent: () => import('./songs-modal/songs-modal.page').then( m => m.SongsModalPage)
  },

];
