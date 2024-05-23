import { Component, Inject } from '@angular/core';
import { Event } from '@angular/router';
import {
  MatDialogRef,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Order } from '../../core/models/order';
import { OrdersService } from '../../core/services/orders.service';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule
  ],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {order: Order},
    private orderService: OrdersService
  ) {}

  delOrder(order_id: number, event: MouseEvent) {
    this.orderService.deleteOrder(order_id).subscribe(() => {
      this.dialogRef.close(true)
    });
  }

}
