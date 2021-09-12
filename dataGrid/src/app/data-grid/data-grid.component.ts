import { ApiService } from './api.service';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CdkTableModule} from '@angular/cdk/table';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})

export class DataGridComponent implements OnInit {

  @Input() 
  path="'http://api.nodesense.ai:7070/api/products'";

  @Input() displayedColumns: any[]=[];

  dataSource: MyDataSource;
  dataSubject = new BehaviorSubject<any[]>([]);

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.dataSource =  new MyDataSource(this.dataSubject);
    console.log('Path ---> ',this.path);
    this.apiService.getData(this.path).subscribe({
      next: value => this.dataSubject.next([value])
    });
  }

}


export class MyDataSource extends DataSource<any[]> {

  constructor(private subject: BehaviorSubject<any[]>) {
    super ();
  }

  connect (): Observable<any[]> {
    return this.subject.asObservable();
  }

  disconnect (  ): void {

  }

}