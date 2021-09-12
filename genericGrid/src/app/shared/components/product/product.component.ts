import { DataGridService } from './../../data-grid.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../model/product';
import { DataSource} from '@angular/cdk/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output()
  dataSource : any;
  dataSourceProduct : Product[];
  @Output()
  displayedColumns: string[];

  constructor(private dataGridService:DataGridService) { }

  ngOnInit() {

    this.displayedColumns= ['brandId', 'name', 'year', 'price'];
    
    this.dataGridService.getProducts().subscribe(
      products => {
        this.dataSourceProduct = products;
      }
    );
   this.dataSource = this.dataSourceProduct;
  }

}
