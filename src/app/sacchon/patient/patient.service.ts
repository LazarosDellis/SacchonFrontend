import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from 'src/app/api-result';
import { PatientsData } from 'src/app/patients-data';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }


  getPatientData(patientId):Observable<ApiResult<PatientsData>>{
    return this.http.get<ApiResult<PatientsData>>('http://localhost:9000/v1/patient/' + patientId,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }
}
