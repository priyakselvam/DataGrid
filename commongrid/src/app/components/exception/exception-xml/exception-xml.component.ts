import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Exception } from './../models/exception';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReprocessorService } from 'src/app/services/reprocessor.service';

@Component({
  selector: 'app-exception-xml',
  templateUrl: './exception-xml.component.html',
  styleUrls: ['./exception-xml.component.css']
})
export class ExceptionXmlComponent implements OnInit {

  displayedColumns: string[];
  selectColumns: string[];
  serviceCall : any ;
  buttonList = new Map();
  dataSourceExcepXml: any;
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
    this.pageSize=25;
   }

   ngOnInit() {

    
    this.displayedColumns= ['flowName', 'errorCode', 'state', 'inputXML'];
   // this.selectColumns = ['select'];
    this.serviceCall = this.reprocessorService;
    this.serviceComp = this;
   // this.buttonList.set('view','View method');

    this.getAllValuesByPage(this.pageIndex, this.pageSize);

  }

  getAllValuesByPage(pageIndex: number, pageSize:number){// method in common gtid
    this.reprocessorService.getAllExceptions(pageIndex,pageSize).subscribe(
      exp => {
         this.setDatabaseValue(exp);
      }
    );
  }

  //method in common grid
  getValuesByFilter(pageIndex: number, pageSize:number, filter: Array<string>, column : string, order : string){
    this.reprocessorService.getExceptionfilter(pageIndex,pageSize, filter, column, order).subscribe(
        exp =>{
          this.setDatabaseValue(exp);
        }
    );
  }

  setDatabaseValue(res : any){
       this.data = res.data as Exception[];
        this.dataSourceExcepXml = this.data;

        console.log('this', this.dataSourceExcepXml);
        this.dataSourceExcepXml = new MatTableDataSource(this.dataSourceExcepXml);
        this.dataSourceExcepXml.matPaginator = this.matPaginator;
        this.length = res.count;
        this.dataSourceExcepXml.matSort = this.matSort;
        this.dataSourceExcepXml.connect().subscribe(d => this.dataSource = d);
  }

}
