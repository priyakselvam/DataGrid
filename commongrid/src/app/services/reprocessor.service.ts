import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Exception } from './../components/exception/models/exception';
import { Injectable, ViewChild } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': 'acuver:dev' })
};

@Injectable({
  providedIn: 'root'
})

export class ReprocessorService {



  constructor(private http: HttpClient) {
  }

  getAllExceptions(offset:number,limit:number) : Observable<any>  {
    return this.http.get<any>(`http://127.0.0.1:8111/opsroom/api/reprocessor/all?offset=${offset}&limit=${limit}`,{
      headers: httpOptions.headers
    });
    //http://13.233.50.155:8080
      //`http://croma.opsroom.acuverconsulting.com/opsroom/reprocessor/all`);
  }

  getExceptionfilter(offset: number, limit: number, data: any[], col: string, order: string) {
    console.log('this', offset, limit,data.length, data);
    
    return this.http.put<any>(`http://127.0.0.1:8111/opsroom/api/reprocessor/all/filter?offset=${offset}&limit=${limit}&sort=${col}&sortdir=${order}`,
    data,httpOptions); 
  }


  view(val : any){
    console.log('method inside reprocessor service ', val);
  }

}
