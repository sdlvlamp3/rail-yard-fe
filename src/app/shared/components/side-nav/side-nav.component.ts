import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
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

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout() {
    this.authService.logOut()
    this.router.navigate['landing']
  }

}
