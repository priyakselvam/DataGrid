import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from './../../services/api-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[];
  selectColumns: string[] ;
  dataSourceProduct:any;
  buttonList = new Map();

  serviceCall : any ;
  dataSource: any;

  //Pagination
  pageIndex:number;
  pageSize:number;
  length:number;

  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  constructor( private apiService : ApiService) {
    this.pageIndex=0;
    this.pageSize=50;
   }

  ngOnInit() {

    console.log('Log Product');

    this.selectColumns = ['select'];
    this.serviceCall = this.apiService;
    this.displayedColumns= ['brandId', 'name', 'year', 'price'];
    this.buttonList.set('addFn','Add');
    this.buttonList.set('removeFn','Remove');
    this.buttonList.set('clearFn','Clear');
    
    this.apiService.getProducts().subscribe(
      products => {
        this.dataSourceProduct = products;
        this.dataSourceProduct.products = products;

        this.dataSourceProduct = new MatTableDataSource(this.dataSourceProduct);
        this.dataSourceProduct.matPaginator = this.matPaginator;
        this.dataSourceProduct.matSort = this.matSort;
        this.length = products.length;
        this.dataSourceProduct.connect().subscribe(d => this.dataSource = d);
      }
    );

  }

}
