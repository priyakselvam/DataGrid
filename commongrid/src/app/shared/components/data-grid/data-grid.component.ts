import { Product } from 'src/app/model/product';
import { Sort, MatTableDataSource } from '@angular/material';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Key } from 'protractor';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input()
  dataSource: any;

  @Input()
  displayedColumns: string[];

  @Input()
  selectColumns : string[] = [];

  @Input()
  buttonList : Map<string,string>;

  @Input()
  serviceCall : any;

  @Input()
  serviceComp:any;

  @Input()
  length: number;

  @Input()
  pageIndex:number;

  @Input()
  pageSize:number;

  @Input()
  btnHdrList : Map<string,string>;

  sortedData = [];
  data = [];
  totalColumns : string[];
  buttonArray = [];
  allFilterMap = new Map();

  public searchValue: any;

  selection = new SelectionModel<any>(true, []);
 
  displayFilter(col : string){

    var val = true;

    if((this.selectColumns).includes(col)){
        val = false;
    }
     if((this.buttonArray).includes(col)){
      val = false;
    }

    return val;
  }

  clickEvent(btn : any, value1 : any, value2 : any){
    var btnName = btn.key;
    this.serviceCall[btnName](value1);
  }

  isSortingDisabled(col : string){

    var sortVal = false;

    if((this.selectColumns).includes(col)){
      sortVal = true;
    }
     if((this.buttonArray).includes(col)){
      sortVal = true;
    }

    return sortVal;
  }
  isSelectHeader(col : string){

    var selVal = false;

    if('select' === col){
      selVal = true;
    }
    return selVal;
  }

  constructor() {
    this.pageIndex=0;
    this.pageSize=50;
   }

  ngOnInit() {

    var array = (this.selectColumns).concat(this.displayedColumns);
    var buttonArray  = [];
    if(this.buttonList != null){
        if(this.buttonList.size > 0){
          this.buttonList.forEach((value: string, key: string) => {
          array = array.concat(value);
          buttonArray = buttonArray.concat(value);
        });
    }
    }

    this.totalColumns = array;
    this.buttonArray = buttonArray;

    console.log(this.totalColumns);
    console.log(this.dataSource);

    const matTableDataSource = new MatTableDataSource(this.dataSource);
    const data = this.dataSource;

    matTableDataSource.filterPredicate = (data, filtre: string) => {
      let result = true;
      let keys = Object.keys(data); 

      console.log('data -->'+data);
      for (const key of keys) {
          if (CONDITIONS_FUNCTIONS["is-equal"](data[key], filtre[key]) === false) { 
            result = false 
            break;
        }
      }

      return result
    };

  }

  clicked(row : any){
    console.log(row);
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    //console.log(numRows);
    return numSelected === numRows;
  }

  handlePage(event){
    this.pageSize=event.pageSize;
    this.pageIndex=event.pageIndex;
    this.serviceComp.getAllValuesByPage( this.pageIndex , this.pageSize);
  }

  applyFilter(col: string) {
    
    var btnname = "Search"+col;
    this.searchValue = ((document.getElementById(btnname) as HTMLInputElement).value);
    const values = this.searchValue;
    //console.log('value => ',values);
    var listFilter = [];
    if(this.searchValue === "" || this.searchValue == null){
      if(this.allFilterMap.has(col)){
         this.allFilterMap.delete(col);
      }
    }else{
      this.allFilterMap = this.allFilterMap.set(col,values);
    }
   // console.log(this.allFilterMap);
    
    if(this.allFilterMap != null){
      if(this.allFilterMap.size > 0){
          this.allFilterMap.forEach((value: any, key: any) => {
          listFilter = listFilter.concat(key+"-"+value);
      });
    }
    }
    if(listFilter != null && listFilter.length >0 ){
      this.serviceComp.getValuesByFilter(this.pageIndex, this.pageSize,listFilter, col, "asc");
    }else{
      this.serviceComp.getAllValuesByPage( this.pageIndex , this.pageSize);
    }
    //this.searchValue = "";
    
    //this.dataSource.filter = values;
    
  }

  clearColumn(columnKey: string): void {
    this.searchValue = null;
    this.applyFilter(columnKey);
  }

  sortData(sort: Sort) {
   
    this.data = this.dataSource.data;

    if (!sort.active || sort.direction === '') {
      this.sortedData = this.data;
      return;
    }

    this.sortedData = this.data.sort(function compareFn(left:any, right:any){

      const ORDER: number = sort.direction == 'desc'? -1 : 1;
      if(left[sort.active] < right[sort.active]){
        return -ORDER;
      }
      if(left[sort.active] > right[sort.active]){
        return ORDER;
      }
      
       return 0;
    });

    this.dataSource.data = this.sortedData;

  }
}

export const CONDITIONS_FUNCTIONS = { 
  "is-equal": function (value, filterdValue) {
    return value == filterdValue;
  }
};