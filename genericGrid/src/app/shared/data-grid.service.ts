import { Product } from './model/product';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './model/City';

@Injectable({
  providedIn: 'root'
})
export class DataGridService {

  constructor(private http : HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http
               .get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }


  getCityDetail(): Observable<City[]> {
    return this.http.get<City[]>(`${environment.apiEndPoint}/api/cities`);
  }
  
}
