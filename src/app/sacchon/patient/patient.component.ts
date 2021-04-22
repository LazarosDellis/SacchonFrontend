import { MeasurementData } from './../../measurement-data';
import { Consultations } from './../../consultations';
import { PatientsData } from './../../patients-data';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { ActivatedRoute } from '@angular/router';
import { AvgMeasurement } from 'src/app/avg-measurement';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  
  insertInfo: boolean = false;
  avgOfMeasurements: FormGroup;
  patientform: FormGroup;
  data : any
  //displayPatientForm:FormGroup;
  measurementId: number = 1;
  person : PatientsData[];
   id : number;
  measurementsAVG : AvgMeasurement
   avgData: any 
  constructor(private patientService:PatientService, 
              private fb:FormBuilder,
              private route: ActivatedRoute) { }

  // insertData(){
  //   this.insertInfo = !this.insertInfo;

  //  }


 

  ngOnInit(): void {

    
    

    this.route.params.subscribe(p => {
      this.id = p.idPatient
     // console.log(this.bugId)
      if (this.id) {
        this.seePersonalData(this.id);
      }
    })       
    //this.seePersonalData()

    this.patientform = this.fb.group({
      typeOfMeasurement: ["", Validators.required],
      valueOfMeasurement: ["", Validators.required],
      date: ["", Validators.required],
      patientId: ["",Validators.required] 
      //doctorId: ["", Validators.required]
    })
   

  } 
  seePersonalData(id: number){
    this.patientService.getPatientData(id).subscribe(result => {
      this.data = result
      console.log(this.data)
    })
  }


  onSumbit(){
    let newData: MeasurementData = this.patientform.value;
    console.log(newData)

    this.patientService.postData(this.measurementId, newData).subscribe(result =>{
      console.log(result)
      
    })
  }


  seeAvg(id: number, fromDate: Date, toDate: Date){
    this.patientService.getAVG(id, fromDate, toDate).subscribe(result =>{
      this.avgData = result
      console.log(this.avgData)
    })
  }

}
