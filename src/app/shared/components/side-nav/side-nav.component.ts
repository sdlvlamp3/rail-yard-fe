import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  constructor(private router: Router, private authService: AuthService) {}

  

  logout() {
    this.authService.logOut()
    this.router.navigate['landing']
  }

}
