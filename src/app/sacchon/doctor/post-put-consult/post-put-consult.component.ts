import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Consultations } from 'src/app/consultations';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-put-consult',
  templateUrl: './post-put-consult.component.html',
  styleUrls: ['./post-put-consult.component.scss']
})
export class PostPutConsultComponent implements OnInit {

  createConsultForm:FormGroup
 

  constructor(private fb:FormBuilder,
    private doctorService: DoctorService,
    private router: Router) { }

  ngOnInit(): void {
    this.createConsultForm = this.fb.group({
      consult: ["", Validators.required],
      date:["", Validators.required],
      patientId: ["", Validators.required],
      doctorId:["", Validators.required]
    })
  }



  onSumbit(){
    let  newConsult: Consultations = this.createConsultForm.value;
   
    // newConsult.doctorId = doctorId;
    // newConsult.date = date;
    // newConsult.consult = consult;
    // newConsult.patientId = patientId;
    
    this.doctorService.postConsultation(newConsult).subscribe(result =>
      {
        console.log(result)
         this.router.navigate(['/doctor'])
      })
  }
}


// newConsult = {
//   id:null,
//    doctorId : null,
//    date: null,
//    consult:null,
//    patientId: null
//  }