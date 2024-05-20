import { Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { OrdersComponent } from './core/components/orders/orders.component';
import { RawMaterialsComponent } from './core/components/raw-materials/raw-materials.component';


export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},

  {
    path: 'landing',
    loadComponent: () => import('./core/components/landing/landing.component')
      .then((m) => m.LandingComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/signup/signup.component')
      .then((m) => m.SignupComponent)
  },

  {
    path: 'login',
  loadComponent: () => import('./login/login.component')
    .then((m) => m.LoginComponent)
  },

  {
    path: 'home-page',
  loadComponent: () => import('./core/components/home-page/home-page.component')
    .then((m) => m.HomePageComponent)
  },

  {
    path: 'orders',
    loadComponent: () => import('./core/components/orders/orders.component')
      .then((m) => m.OrdersComponent)
  },

  {
    path: 'raw-materials',
    loadComponent: () => import('./core/components/raw-materials/raw-materials.component')
      .then ((m) => m.RawMaterialsComponent)
  }
]
