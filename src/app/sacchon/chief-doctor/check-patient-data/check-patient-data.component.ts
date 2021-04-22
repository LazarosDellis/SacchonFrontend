import { MeasurementData } from './../../../measurement-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChiefDoctorServiceService } from '../chief-doctor-service.service';

@Component({
  selector: 'app-check-patient-data',
  templateUrl: './check-patient-data.component.html',
  styleUrls: ['./check-patient-data.component.scss']
})
export class CheckPatientDataComponent implements OnInit {

  displayDataOfPatientForm: FormGroup;
  measurements : MeasurementData[];



  constructor(private router: Router,
    private fb:FormBuilder,
    private chiefDoctorService:ChiefDoctorServiceService) { }

  ngOnInit(): void {
    this.displayDataOfPatientForm = this.fb.group({
        id:["", Validators.required],
        startDate:["",Validators.required],
        EndDate:["",Validators.required]
    })

  } 


  searchPatientData(idPatient,  fromDate, toDate){
   
    this.chiefDoctorService.getMeasurementsOfAPatient(idPatient.value ,fromDate.value, toDate.value).subscribe(result => 
      {
        this.measurements = result.data
        //console.log(this.measurements)
      })
    
  } 


  

}
