import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CityService } from './../../services/city-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  //mandatory
  displayedColumns: String[];
  serviceCall : any ;
  buttonList = new Map();
  dataSourceCity: any;
  dataSource: any;


  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  constructor(private cityService: CityService) { }

  ngOnInit() {

    this.displayedColumns= ['id', 'name', 'state'];
    this.serviceCall = this.cityService;
    this.buttonList.set('cityFn','City method');

    this.cityService.getCities().subscribe(
      cities => {
        this.dataSourceCity = cities;
        this.dataSourceCity.city = cities;

        console.log(this.dataSourceCity);

        this.dataSourceCity.matPaginator = this.matPaginator;
        this.dataSourceCity.matSort = this.matSort;

        this.dataSourceCity = new MatTableDataSource(this.dataSourceCity);
        this.dataSourceCity.connect().subscribe(d => this.dataSource = d);
      }
    );


  }

}
