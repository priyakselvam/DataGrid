import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { CityComponent } from './components/city/city.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    DataGridComponent,
    CityComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    CdkTableModule
  ],
  exports: [
    DataGridComponent
  ]
})
export class SharedModule { }
