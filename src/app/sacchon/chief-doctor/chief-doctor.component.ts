import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorComponent } from './../doctor/doctor.component';
import { PatientsData } from './../../patients-data';
import { Component, OnInit } from '@angular/core';
import { ChiefDoctorServiceService } from './chief-doctor-service.service';
import { Router } from '@angular/router';
import { DoctorsData } from 'src/app/doctors-data';



@Component({
  selector: 'app-chief-doctor',
  templateUrl: './chief-doctor.component.html',
  styleUrls: ['./chief-doctor.component.scss']
})
export class ChiefDoctorComponent implements OnInit {

  patients: PatientsData[];
  patientsNoActivity: PatientsData[];
  doctors: DoctorsData[];
  doctorsNoActivity:DoctorsData[];

  patientsWithNoActivityForm: FormGroup;
  doctorsWithNoActivityForm: FormGroup;



  constructor(private fb: FormBuilder,
    private chiefDoctorService: ChiefDoctorServiceService,
    private router: Router) { }

  seeAllPatients() {
    this.chiefDoctorService.getPatients().subscribe(result => {
      this.patients = result.data
      console.log(this.patients)
    });

  }

  seeAllDoctors() {
    this.chiefDoctorService.getDoctors().subscribe(result => {
      this.doctors = result.data
      console.log(this.doctors)
    })
  }


  ngOnInit(): void {

    this.seeAllDoctors();

    this.seeAllPatients();

    this.patientsWithNoActivityForm = this.fb.group({
      startDate: ["", Validators.required],
      endDate: ["", Validators.required]

    });

    this.doctorsWithNoActivityForm = this.fb.group({
      startDate: ["", Validators.required],
      endDate: ["", Validators.required]

    })
  }

  patientsWithNoActivity(fromDate, toDate){
    this.chiefDoctorService.getPatientsWithNoActivity(fromDate.value, toDate.value)
    .subscribe(result =>{ 
      this.patientsNoActivity = result.data
    })
  }

  doctorsWithNoActivity(fromDate, toDate){
    this.chiefDoctorService.getDoctorsWithNoActivity(fromDate.value, toDate.value)
    .subscribe(result =>{ 
      this.doctorsNoActivity = result.data
    })
  }






}
