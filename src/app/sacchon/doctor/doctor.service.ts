import { DoctorsData } from './../../doctors-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/api-result';
import { Consultations } from 'src/app/consultations';
import { MeasurementData } from 'src/app/measurement-data';
import { PatientsData } from 'src/app/patients-data';
import { retry, catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http: HttpClient) { }

  getPersonalInfo(id:number): Observable<ApiResult<DoctorsData[]>> {
    return this.http.get<ApiResult<DoctorsData[]>>('http://localhost:9000/v1/doctor/' + id);
  }

  getPatientsMeasurements(measurementId: number, idPatient: number): Observable<ApiResult<MeasurementData[]>> {
    return this.http.get<ApiResult<MeasurementData[]>>('http://localhost:9000/v1/measurement/' + measurementId + '/patient/' + idPatient,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }

  getPatientsConsultations(idPatient: number): Observable<ApiResult<Consultations[]>> {
    return this.http.get<ApiResult<Consultations[]>>('http://localhost:9000/v1/patient/' + idPatient + '/consultation',
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }

  seePatientsNoConsult30(): Observable<ApiResult<PatientsData[]>> {
    return this.http.get<ApiResult<PatientsData[]>>('http://localhost:9000/v1/noPatient/noConsultation',
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }

  postConsultation(newConsult: Consultations): Observable<ApiResult<Consultations>> {
    console.log(newConsult);  
    return this.http.post<ApiResult<Consultations>>('http://localhost:9000/v1/consultation/doctor/' +  newConsult.doctorId , newConsult,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})})
           
  };

  getConsultationById(id:number): Observable<ApiResult<Consultations>> {
    return this.http.get<ApiResult<Consultations>> ('http://localhost:9000/v1/consultation/' + id,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }
 
 

  editConsult(id:number,doctorId:number, newConsult:Consultations):Observable<ApiResult<Consultations>> {
    console.log(newConsult)
    return this.http.put<ApiResult<Consultations>> ('http://localhost:9000/v1/consultation/' + id + '/doctor/' + doctorId , newConsult,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }

  deleteConsult(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:9000/v1/consult/' + id);
  }
  

  
}
