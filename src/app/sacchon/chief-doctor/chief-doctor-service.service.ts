import { MeasurementData } from './../../measurement-data';
import { ApiResult } from './../../api-result';
import { PatientsData } from './../../patients-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorsData } from 'src/app/doctors-data';

@Injectable({
  providedIn: 'root'
})
export class ChiefDoctorServiceService {

  constructor(private http: HttpClient) { }


  getPatients():Observable<ApiResult<PatientsData>>{
    return this.http.get<ApiResult<PatientsData>>('http://localhost:9000/v1/patient');
  }

  getDoctors():Observable<ApiResult<DoctorsData>>{
    return this.http.get<ApiResult<DoctorsData>>('http://localhost:9000/v1/doctor');
  }

  getMeasurementsOfAPatient(idPatient: number ,fromDate :Date, toDate: Date):Observable<ApiResult<MeasurementData>>{
    return this.http.get<ApiResult<MeasurementData>>('http://localhost:9000/v1/measurement/patient/' + idPatient + '/dateFrom/' + fromDate + '/dateTo/' + toDate);
  }

}
