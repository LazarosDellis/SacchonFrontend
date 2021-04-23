import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consultations } from 'src/app/consultations';
import { ChiefDoctorServiceService } from '../chief-doctor-service.service';

@Component({
  selector: 'app-check-doctor-data',
  templateUrl: './check-doctor-data.component.html',
  styleUrls: ['./check-doctor-data.component.scss']
})
export class CheckDoctorDataComponent implements OnInit {

  displayDataOfDoctorForm: FormGroup;
  consultations: Consultations[];
  constructor(private router: Router,
    private fb:FormBuilder,
    private chiefDoctorService:ChiefDoctorServiceService) { }

  ngOnInit(): void {
    this.displayDataOfDoctorForm = this.fb.group({
      id:["", Validators.required],
      startDate:["",Validators.required],
      EndDate:["",Validators.required]
    })
  }


  searchDoctorData(idDoctor, fromDate, toDate){
    this.chiefDoctorService.getConsultationsOfADoctor(idDoctor, fromDate, toDate)
    .subscribe(result => {
      this.consultations = result.data
    })
  }


}
