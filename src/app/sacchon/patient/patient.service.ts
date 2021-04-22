import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from 'src/app/api-result';
import { PatientsData } from 'src/app/patients-data';
import { MeasurementData } from 'src/app/measurement-data';
import { AvgMeasurement } from 'src/app/avg-measurement';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }


  getPatientData(patientId: number):Observable<ApiResult<PatientsData[]>>{
    console.log(patientId)
    return this.http.get<ApiResult<PatientsData[]>>('http://localhost:9000/v1/patient/' + patientId,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }


  postData(id:number , newData: MeasurementData): Observable<ApiResult<MeasurementData>> {
    console.log(newData);  
    return this.http.post<ApiResult<MeasurementData>>('http://localhost:9000/v1/measurement/' + id , newData,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})})
           
}


getAVG(id : number, from : Date, to:Date ):Observable<ApiResult<AvgMeasurement[]>> {
  return this.http.get<ApiResult<AvgMeasurement[]>>('http://localhost:9000/v1/measurementavg/patient/' + id + '/dateFrom/' + from + '/dateTo/' + to, 
  {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})})
}



}
