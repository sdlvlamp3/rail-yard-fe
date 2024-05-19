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

  editOrder: Order = null;

  constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditModalComponent, {
      data: this.editOrder,
    });
  }

  editDialog(): void {
    const dialogRef = this.dialog.open(AddEditModalComponent, {
      data: {
        order: {
          car_id: '123',
          requested_date: new Date('2024-02-16'),
          user_id: 1,
          raw_material_id: 1,
          weight: 1645.12,
          id: 1,
        },
        modeText: 'Edit'
      },
    });
  }

  logout() {
    this.authService.logOut()
    this.router.navigate['landing']
  }

}
