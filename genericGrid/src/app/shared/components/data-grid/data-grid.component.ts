import { City } from './../../model/City';
import { Product } from './../../model/product';
import { DataGridService } from './../../data-grid.service';
import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  buttonProduct:any = 'Show Product';
  buttonCity:any = 'Show City';
  showProduct: boolean = false;
  showCity: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleProduct(){
    this.showProduct = !this.showProduct;

    if(this.showCity)
      this.showCity = !this.showCity;
      this.buttonCity = "Show City";

    if(this.showProduct)  
      this.buttonProduct = "Hide Product";
    else
      this.buttonProduct = "Show Product";

  }

  toggleCity(){
    this.showCity = !this.showCity;

    if(this.showProduct)
        this.showProduct = !this.showProduct;
        this.buttonProduct = "Show Product";

    if(this.showCity)  
      this.buttonCity = "Hide City";
    else
      this.buttonCity = "Show City";
  }

}
