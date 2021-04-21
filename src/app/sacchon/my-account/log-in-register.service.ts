import { Login } from './../../login';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInRegisterService {

  params = new HttpParams();

  responseOfAuth =  new Subject<boolean>();

  constructor(private http:HttpClient) { }

  authentication(values: Login){

   

    

    return this.http.post<Login>(' http://localhost:9000/v1/login',
     values )
  }

  
}
