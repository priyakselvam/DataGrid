import { ExceptionComponent } from './components/exception/exception.component';
import { FilterItemDirective } from './shared/filter-item.directive';
import { SharedModule } from './shared/shared.module';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSelectModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatButtonModule,
  MatCardModule,
  MatButtonToggleModule,
  MatTableModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatChipsModule,
  MatListModule,
  MatDialogModule,
  MatStepperModule,
  MatExpansionModule,
  MatMenuModule,
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CityComponent } from './components/city/city.component';
import { DataGridComponent } from './shared/components/data-grid/data-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExceptionXmlComponent } from './components/exception/exception-xml/exception-xml.component';

const routes : Routes = [
  {
    path: 'product',
       component: ProductComponent 
  },
  {
    path: 'city',
    component: CityComponent 
 },
 {
  path: 'excep',
  component: ExceptionComponent 
},
{
  path: 'excepXml',
  component: ExceptionXmlComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CityComponent,
    DataGridComponent,
    FilterItemDirective,
    ExceptionComponent,
    ExceptionXmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSortModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatStepperModule,
    MatExpansionModule,
    MatMenuModule,
    CommonModule,
    CdkTableModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
