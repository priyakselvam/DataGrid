import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { City } from '../model/City';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http
               .get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

  callMethod(methodName : string, value1 : any, value2: any){
    if('addFn' == methodName){
      this.addFn(value1);
    }
    if('removeFn' == methodName){
      this.removeFn(value1, value2 )
    }
  }

  addFn(val : any){
    console.log('Function in ApiService addFn');
    console.log(val);
  }

  removeFn(value1: any, value2 : any){
    console.log(value2 +"-->"+value1);
  }
  
}
