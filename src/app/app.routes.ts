import { Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: 'home', component: LandingComponent},
  {path: 'login', component:LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];
