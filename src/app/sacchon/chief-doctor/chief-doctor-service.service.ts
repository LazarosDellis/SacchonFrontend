import { MeasurementData } from './../../measurement-data';
import { ApiResult } from './../../api-result';
import { PatientsData } from './../../patients-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorsData } from 'src/app/doctors-data';
import { Consultations } from 'src/app/consultations';

@Injectable({
  providedIn: 'root'
})
export class ChiefDoctorServiceService {

  constructor(private http: HttpClient) { }


  getPatients():Observable<ApiResult<PatientsData[]>>{
    return this.http.get<ApiResult<PatientsData[]>>('http://localhost:9000/v1/patient' ,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }

  getDoctors():Observable<ApiResult<DoctorsData[]>>{
    return this.http.get<ApiResult<DoctorsData[]>>('http://localhost:9000/v1/doctor',
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }

  getMeasurementsOfAPatient(dataPatientForm):Observable<ApiResult<MeasurementData[]>>{

    console.log(dataPatientForm)
    return this.http.get<ApiResult<MeasurementData[]>>('http://localhost:9000/v1/measurement/patient/' + dataPatientForm.id + '/dateFrom/' + dataPatientForm.startDate + '/dateTo/' + dataPatientForm.EndDate,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})}
    );
  }

  getConsultationsOfADoctor(idDoctor:number, fromDate: Date, toDate: Date):Observable<ApiResult<Consultations[]>>{
    return this.http.get<ApiResult<Consultations[]>>(' http://localhost:9000/v1/consultation/doctor/' + idDoctor + '/dateFrom/' + fromDate + '/dateTo/' + toDate,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})}
    );
  }

  getPatientsNoConsulta30(): Observable<ApiResult<PatientsData[]>>{
  return this.http.get<ApiResult<PatientsData[]>>(' http://localhost:9000/v1/noPatient/noConsultation',
  {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }

  getPatientsWithNoActivity(fromDate :Date, toDate: Date):Observable<ApiResult<PatientsData[]>>{
    return this.http.get<ApiResult<PatientsData[]>>(' http://localhost:9000/v1/patient/measurements/dateFrom/' + fromDate + '/dateTo/' + toDate,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})}
    );
  }

  getDoctorsWithNoActivity(fromDate :Date, toDate: Date):Observable<ApiResult<DoctorsData[]>>{
    return this.http.get<ApiResult<DoctorsData[]>>(' http://localhost:9000/v1/doctor/consultation/dateFrom/' + fromDate + '/dateTo/' + toDate,
    {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials"))})});
  }
}
