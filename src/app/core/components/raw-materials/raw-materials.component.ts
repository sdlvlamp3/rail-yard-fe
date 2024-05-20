import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-raw-materials',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule  
  ],
  templateUrl: './raw-materials.component.html',
  styleUrl: './raw-materials.component.css'
})
export class RawMaterialsComponent {
  materialId: string;
  materialName: string;
  weight: number;
  quantity: number;

  onSubmit() {
    if (this.materialName && this.weight > 0 && this.quantity >= 1) {
      console.log('Submitting:', this.materialName, this.weight, this.quantity);

    }
  }
}
