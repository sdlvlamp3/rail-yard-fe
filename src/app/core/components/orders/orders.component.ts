import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MatTableModule, DatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  Order_DATA: Order[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
      this.orderLoad()
  }

  orderLoad(): void {
    this.ordersService.getOrders().subscribe({
      next: (orders) => {

        this.Order_DATA = orders;
        console.log('Orders Retrieved:', orders)
        this.dataSource = this.Order_DATA;
      },
      error: (error) => {
        console.error(error);
      }
    });
}


  displayedColumns: string[] = ['carId', 'requestedDate', 'receivedDate', 'extractionStart', 'extractionEnd', 'releaseDate', 'rawMaterialId'];
  dataSource = this.Order_DATA;
}
