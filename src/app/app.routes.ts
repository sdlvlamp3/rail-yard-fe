import { Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { OrdersComponent } from './core/components/orders/orders.component';
import { ChartComponent } from './chart/chart.component';
import { authGuard } from './auth.guard';


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
  loadComponent: () => import('./shared/components/login/login.component')
    .then((m) => m.LoginComponent)
  },

  {
    path: 'home-page',
  loadComponent: () => import('./core/components/home-page/home-page.component')
    .then((m) => m.HomePageComponent),
    canActivate: [authGuard]
  },

  {
    path: 'orders',
    loadComponent: () => import('./core/components/orders/orders.component')
      .then((m) => m.OrdersComponent),
      canActivate: [authGuard]
  },

  {
    path: 'chart',
    loadComponent: () => import('./chart/chart.component')
      .then((m) => m.ChartComponent),
      canActivate: [authGuard]
  }
]
