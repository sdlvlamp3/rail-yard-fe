import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RawMaterial } from '../../shared/models/raw-material.model';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialsService {

  constructor(private http: HttpClient) { }

  getMaterials(): Observable<RawMaterial[]>{
    return this.http.get<RawMaterial[]>('http://localhost:3000/raw_materials');
  }
}
