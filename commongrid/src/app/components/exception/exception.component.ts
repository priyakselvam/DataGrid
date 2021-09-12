import { Exception } from './models/exception';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReprocessorService } from 'src/app/services/reprocessor.service';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.css']
})
export class ExceptionComponent implements OnInit {

  displayedColumns: string[];
  selectColumns: string[];
  serviceCall : any ;
  buttonList = new Map();
  btnHdrList = new Map();
  dataSourceExcep: any;
  dataSource: any;
  data: Exception[];
  serviceComp : any;
  
//Pagination
  pageIndex:number;
  pageSize:number;
  length:number;
  
  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  constructor(private reprocessorService : ReprocessorService) {
    this.pageIndex=0;
    this.pageSize=50;
   }

  ngOnInit() {

    
    this.displayedColumns= ['flowName', 'errorCode', 'errorTxnId', 'errorString'];
    this.selectColumns = ['select'];
    this.serviceCall = this.reprocessorService;
    this.serviceComp = this;
    this.buttonList.set('view','View method');
    this.btnHdrList.set('hdrMet', 'Header method');
    this.btnHdrList.set('hdrMet1', 'Header method 1');

    this.getAllValuesByPage(this.pageIndex, this.pageSize);

  }

  getAllValuesByPage(pageIndex: number, pageSize:number){
    this.reprocessorService.getAllExceptions(pageIndex,pageSize).subscribe(
      exp => {
         this.setDatabaseValue(exp);
      }
    );
  }

  getValuesByFilter(pageIndex: number, pageSize:number, filter: Array<string>, column : string, order : string){
    this.reprocessorService.getExceptionfilter(pageIndex,pageSize, filter, column, order).subscribe(
        exp =>{
          this.setDatabaseValue(exp);
        }
    );
  }

  setDatabaseValue(res : any){
       this.data = res.data as Exception[];
        this.dataSourceExcep = this.data;

       // console.log('this', this.dataSourceExcep);
        this.dataSourceExcep = new MatTableDataSource(this.dataSourceExcep);
        this.dataSourceExcep.matPaginator = this.matPaginator;
        this.length = res.count;
        this.dataSourceExcep.matSort = this.matSort;
        this.dataSourceExcep.connect().subscribe(d => this.dataSource = d);
  }

}
