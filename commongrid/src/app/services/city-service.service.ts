import { environment } from './../../environments/environment';
import { City } from './../model/City';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities():Observable<City[]>{
    return this.http.get<City[]>(`${environment.apiEndPoint}/api/cities`);
  }

  callMethod(methodName : string, value1 : any, value2: any){
    if('cityFn' == methodName){
      this.cityFn(value1);
    }
  }

  cityFn(val : any){
    console.log('Method in City Service');
    console.log(val);
  }
  
}
