import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/orders`)
  }

  newOrder(order_Data: any): Observable<Order> {
    console.log('Order info:', order_Data)

    return this.http.post<Order>(`${environment.apiUrl}/orders`, order_Data)
    }

  patchOrder(order_id: number, order_Data: any): Observable<Order> {
    return this.http.patch<Order>(`${environment.apiUrl}/orders/${order_id}`, order_Data)
  }

  deleteOrder(order_id: number): Observable<Order> {
    return this.http.delete<Order>(`${environment.apiUrl}/orders/${order_id}`)
  }
}
