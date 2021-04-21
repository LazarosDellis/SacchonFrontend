import { PatientsData } from './../../patients-data';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  
  insertInfo: boolean = false;

  patientform: FormGroup;

  displayPatientForm:FormGroup;

  person : PatientsData[];

  constructor(private patientService:PatientService, private fb:FormBuilder) { }

  insertData(){
    this.insertInfo = !this.insertInfo;

   }

   searchPatientData(patientId: number){
     this.patientService.getPatientData(patientId).subscribe(result => {
      this.person = result.data}
     
     )
   }

  ngOnInit(): void {
           // this.displayPersonalData;
           this.displayPatientForm = this.fb.group({
            id : ["", Validators.required]
          })

  } 
  
  

   


  submitPatientData(){
    this.patientform.value({
      glycoseMeasurement:["", Validators.required],
      carbsMeasurement: ["", Validators.required]
           
    })

    
  }

 

}
