import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  public chartOptions: ChartOptions = {
    responsive: true,
  };
  public chartLabels: string[] = ['Material1', 'Material1', 'Material1', 'Material1', 'Material1', 'Material1', 'Material1'];
  public chartType: ChartType = 'bar';
  public chartLegend = true;
  public chartPlugins = [];

  public chartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Weight' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];



}
