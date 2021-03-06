import { AccountInfo } from 'src/app/account-info';
import { UserType } from './../../user-type';
import { Login } from './../../login';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ApiResult } from 'src/app/api-result';

@Injectable({
  providedIn: 'root'
})
export class LogInRegisterService {

  params = new HttpParams();

  responseOfAuth =  new Subject<boolean>();


  logged(){
    this.responseOfAuth.next(true);
  }


  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 


  authentication(values: Login): Observable<UserType>{
    
    return this.http.post<UserType>(' http://localhost:9000/v1/login', JSON.stringify(values), this.httpOptions );

  }


  createAccount(newAccount:AccountInfo): Observable<AccountInfo>{
    console.log(newAccount)
    return this.http.post<AccountInfo>(' http://localhost:9000/v1/registerPatient', newAccount );
  }
  
}
