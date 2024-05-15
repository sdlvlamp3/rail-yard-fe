import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../../core/models/order';
import { RawMaterial } from '../../shared/models/raw-material.model';
import { RawMaterialsService } from '../../core/services/raw-materials.service';

@Component({
  selector: 'app-add-edit-modal',
  standalone: true,
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
    @Inject(MAT_DIALOG_DATA) public data: Order,
    private formbuilder: FormBuilder,
    private rawMaterialsService: RawMaterialsService
  ) {
    this.orderForm = this.formbuilder.group({
      car_id: new FormControl('', Validators.required),
      requested_date: new FormControl<Date>(new Date(), Validators.required),
      received_date: new FormControl<Date>(null),
      extraction_start: new FormControl<Date>(null),
      extraction_end: new FormControl<Date>(null),
      release_date: new FormControl<Date>(null),
      user_id: new FormControl<number>(null, Validators.required),
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
      this.orderForm.patchValue(this.data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    console.log(this.orderForm.value);

    this.dialogRef.close(this.orderForm.value);
  }

}
