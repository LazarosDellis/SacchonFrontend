import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  insertInfo: boolean = false;
  patientform: FormGroup;

  constructor() { }

  insertData(){
    this.insertInfo = !this.insertInfo;

   }

  ngOnInit(): void {
    


  } 
  
  

   


  submitPatientData(){
    this.patientform.value({
      glycoseMeasurement:["", Validators.required],
      carbsMeasurement: ["", Validators.required]
           
    })

    
  }

 

}
