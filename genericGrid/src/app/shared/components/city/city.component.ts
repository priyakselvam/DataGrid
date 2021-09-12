import { City } from './../../model/City';
import { Component, OnInit } from '@angular/core';
import { DataGridService } from '../../data-grid.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  dataSourceCity: City[];
  displayedColumns: string[];

  constructor(private dataGridService: DataGridService) { }

  ngOnInit() {

    this.displayedColumns =['id', 'name', 'state'];

    this.dataGridService.getCityDetail().subscribe(city => {
      this.dataSourceCity = city;
    });
  }

}
