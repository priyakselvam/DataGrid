import { FormsModule } from '@angular/forms';
import { CityComponent } from './../components/city/city.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { ProductComponent } from '../components/product/product.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { SortPipe } from './pipes/sort.pipe';

import {} from 'rxjs'

@NgModule({
  declarations: [
    SortPipe
  ],
  imports: [
    CommonModule, 
    CdkTableModule,
    MatTableModule, 
    FormsModule
  ],
  exports: [
    SortPipe
  ]
})
export class SharedModule { }
