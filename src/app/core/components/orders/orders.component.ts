import { Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule,
  MatMenuTrigger
} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { AddEditModalComponent } from '../../../features/add-edit-modal/add-edit-modal.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    DatePipe,
    MatIcon,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orderData: Order[] = [];

  constructor(
    private ordersService: OrdersService,
    public router: Router,
    public dialog: MatDialog,
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditModalComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.orderLoad();
    });
  }

  editDialog(order: Order): void {
    console.log('Order to edit:', order.received_date)
    const dialogRef = this.dialog.open(AddEditModalComponent, {
      data: {
        order: {
          id: order.id,
          car_id: order.car_id,
          requested_date: order.requested_date ? new Date(order.requested_date) : null,
          received_date: order.received_date ? new Date(order.received_date) : null,
          extraction_start: order.extraction_start ? new Date(order.extraction_start) : null,
          extraction_end: order.extraction_end ? new Date(order.extraction_end) : null,
          release_date: order.release_date ? new Date(order.release_date) : null,
          raw_material_id: order.raw_material_id,
          weight: order.weight,
          user_id: order.user_id
        },
        modeText: 'Edit'
      },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.orderLoad();
    });
  }

  ngOnInit(): void {
      this.orderLoad()
  }

  orderLoad(): void {
    this.ordersService.getOrders().subscribe({
      next: (orders) => {
        this.orderData = orders;
        console.log('Orders Retrieved:', orders)
        this.dataSource = this.orderData;
      },
      error: (error) => {
        console.error(error);
      }
    });
}

//Order control logic lives here; modals, methods, and more

openDelDialogue() {

}

closeDelDialogue() {

}

delOrder(order_id: number, event: MouseEvent) {
  //event.stopPropagation()
  this.ordersService.deleteOrder(order_id).subscribe(() => {
    this.orderLoad()
  });
}

  // Table logic lives here;

  displayedColumns: string[] = ['carId', 'requestedDate', 'receivedDate', 'extractionStart', 'extractionEnd', 'releaseDate', 'rawMaterialId', 'weight', 'actions'];
  dataSource = this.orderData;
}
