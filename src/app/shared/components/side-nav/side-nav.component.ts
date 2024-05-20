import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddEditModalComponent } from '../../../features/add-edit-modal/add-edit-modal.component';
import { Order } from '../../../core/models/order';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  constructor(public router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logOut()
    this.router.navigate['landing']
  }

}
