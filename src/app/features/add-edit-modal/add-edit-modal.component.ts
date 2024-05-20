import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RawMaterialsService } from '../../core/services/raw-materials.service';
import { OrdersService } from '../../core/services/orders.service';
import { RawMaterial } from '../../shared/models/raw-material.model';
import { Order } from '../../core/models/order';
@Component({
  selector: 'app-add-edit-modal',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    MatDatepickerModule
  ],
  templateUrl: './add-edit-modal.component.html',
  styleUrl: './add-edit-modal.component.css'
})
export class AddEditModalComponent implements OnInit{

  orderForm: FormGroup;

  modeText: 'Add' | 'Edit' = 'Add';

  materials: RawMaterial[]

  constructor(
    public dialogRef: MatDialogRef<AddEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      order: Order,
      modeText: 'Add' | 'Edit'
    },
    private formbuilder: FormBuilder,
    private rawMaterialsService: RawMaterialsService,
    private ordersService: OrdersService
  ) {

    this.orderForm = this.formbuilder.group({
      car_id: new FormControl('', Validators.required),
      requested_date: new FormControl<Date>(null, Validators.required),
      received_date: new FormControl<Date>(null),
      extraction_start: new FormControl<Date>(null),
      extraction_end: new FormControl<Date>(null),
      release_date: new FormControl<Date>(null),
      user_id: new FormControl<number>(1, Validators.required),
      raw_material_id: new FormControl<number>(null, Validators.required),
      weight: new FormControl<number>(null, Validators.required),
    });
  }

  ngOnInit() {
    this.rawMaterialsService.getMaterials().subscribe({
      next: (materials) => {
        this.materials = materials;
      },
      error: (error) => {
        console.error(error);
      }
    })
    if (this.data) {
      this.modeText = 'Edit';
      this.orderForm.patchValue(this.data.order);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.modeText === 'Edit'){
      this.ordersService.patchOrder(this.data.order.id, this.orderForm.value).subscribe({
        next: (order) => {
          this.dialogRef.close(order);
        },
        error: (error) => {
          console.error(error);
        }
      })
    } else {
      this.ordersService.newOrder(this.orderForm.value).subscribe({
        next: (order) => {
          this.dialogRef.close(order);
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

}
