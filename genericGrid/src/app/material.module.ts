import { NgModule } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';

import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      MatTableModule,
      CommonModule
    ],
    exports: [
      MatTableModule
    ]
})  

export class MaterialModule{}