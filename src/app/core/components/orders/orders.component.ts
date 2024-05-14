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
  orderData: Order[] = [];

  constructor(private ordersService: OrdersService) {}

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


  displayedColumns: string[] = ['carId', 'requestedDate', 'receivedDate', 'extractionStart', 'extractionEnd', 'releaseDate', 'rawMaterialId', 'weight'];
  dataSource = this.orderData;
}
