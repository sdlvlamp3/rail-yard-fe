import { Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';


export const routes: Routes = [
  { path: 'home', component: LandingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'orders', loadComponent: () =>
    import('./orders/orders.component').then((c) =>c.OrdersComponent)},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];
