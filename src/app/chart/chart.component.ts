import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { OrdersService } from '../core/services/orders.service';
import { Order } from '../core/models/order';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  orderData: Order[] = [];

  constructor(private ordersService:OrdersService){}

ngOnInit(): void {
  this.orderLoad()
}


orderLoad(): void {
  this.ordersService.getOrders().subscribe({
    next: (orders) => {

      this.orderData = orders;
      console.log('Orders Retrieved:', orders)
      this.updateChart()

    },
    error: (error) => {
      console.error(error);
    }
  });
}



updateChart(): void{
  this.chartLabels = this.orderData.map(order => order.car_id);
  let weights = this.orderData.map(order => order.weight !== null ? order.weight : 0);
  this.chartData = [{ data: weights, label: 'Weight' }];


}




  public chartOptions: ChartOptions = {
    responsive: true,
  };
  // public chartLabels: string[] = ['Material1', 'Material1', 'Material1', 'Material1', 'Material1', 'Material1', 'Material1'];
  public chartLabels: string[] = [];
  public chartType: ChartType = 'bar';
  public chartLegend = true;
  public chartPlugins = [];

  public chartData: ChartDataset[] = [];
  // ];
    // { data: [65.4, 59, 80, 81, 56, 55, 40], label: 'Weight' },

}
