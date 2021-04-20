import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  insertInfo: boolean = false;
  doctorform: FormGroup;

  constructor() { }

  insertData(){
    this.insertInfo = !this.insertInfo;

   }

  ngOnInit(): void {
    


  } 
  
  

   


  sumbitConsultation(){
    this.doctorform.value({
      consultation:["", Validators.required],
                
    })

    
  }


}
