import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    NavbarComponent,
    SideNavComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rail-yard-fe';
  drawerOpen: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateDrawerState(event.urlAfterRedirects);
      }
    });
  }

  private updateDrawerState(url: string) {
    const drawerHiddenRoutes = ['/login', '/landing', '/signup'];
    this.drawerOpen = !drawerHiddenRoutes.includes(url);
  }

}
