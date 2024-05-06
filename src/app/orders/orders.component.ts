import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  Cart_DATA: any[] = [
    {number: 1, requestedDate: 'Hydrogen', receivedDate: 1.0079, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'H'},
    {number: 2, requestedDate: 'Helium', receivedDate: 4.0026, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'He'},
    {number: 3, requestedDate: 'Lithium', receivedDate: 6.941, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'Li'},
    {number: 4, requestedDate: 'Beryllium', receivedDate: 9.0122, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'Be'},
    {number: 5, requestedDate: 'Boron', receivedDate: 10.811, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'B'},
    {number: 6, requestedDate: 'Carbon', receivedDate: 12.0107, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'C'},
    {number: 7, requestedDate: 'Nitrogen', receivedDate: 14.0067, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'N'},
    {number: 8, requestedDate: 'Oxygen', receivedDate: 15.9994, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'O'},
    {number: 9, requestedDate: 'Fluorine', receivedDate: 18.9984, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'F'},
    {number: 10, requestedDate: 'Neon', receivedDate: 20.1797, extractionStartDate:32, emptiedDate:43, releasedDate:43, name: 'Ne'},
  ];


  displayedColumns: string[] = ['number', 'requestedDate', 'receivedDate', 'extractionStartDate', 'emptiedDate', 'releasedDate', 'name'];
  dataSource = this.Cart_DATA;
}
