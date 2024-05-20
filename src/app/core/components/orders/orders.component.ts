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
    
  ) {}



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
