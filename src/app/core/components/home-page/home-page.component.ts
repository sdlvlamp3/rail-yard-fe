import { Component } from '@angular/core';
import { OrdersComponent } from '../orders/orders.component';
import { SideNavComponent } from '../../../shared/components/side-nav/side-nav.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    OrdersComponent,
    SideNavComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
