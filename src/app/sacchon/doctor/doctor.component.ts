import { MeasurementData } from './../../measurement-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from './doctor.service';
import { Consultations } from 'src/app/consultations';
import { PatientsData } from 'src/app/patients-data';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  patients: PatientsData[]

  insertInfo: boolean = false;
  doctorform: FormGroup;
  displayDataOfAPatientForm: FormGroup
  measurementsOfAPatient: MeasurementData[];
  consultationsOfAPatient: Consultations[];

  constructor(private router: Router,
    private fb: FormBuilder, private doctorService: DoctorService) { }

  insertData() {
    this.insertInfo = !this.insertInfo;

  }

  ngOnInit(): void {
    this.displayDataOfAPatientForm = this.fb.group({
      id: ["", Validators.required]
    })


  }



  searchMeasurementData(idPatient: number) {
    let measurementId = 1;
    this.doctorService.getPatientsMeasurements(measurementId, idPatient).subscribe(result => {
      this.measurementsOfAPatient = result.data
      //console.log(this.measurements)
    })

  }

  searchConsultationData(idPatient: number) {
    this.doctorService.getPatientsConsultations(idPatient).subscribe(result => {
      this.consultationsOfAPatient = result.data
      //console.log(this.measurements)
    })
  }

  seePatientsNoConsult30() {
    this.doctorService.seePatientsNoConsult30().subscribe(result => {
      this.patients = result.data
    })
  }

  createNewConsult(IdPatient: number) {
    this.router.navigate(['/createUpdateConsult'])
  }

  updateConsultation(consultId: number) {
    this.router.navigate(['/createUpdateConsult', consultId])
    console.log(consultId)
  }

  deleteConsultation(id: number) {
    this.doctorService.deleteConsult(id).subscribe(() => {
      console.log('Consultation with Id=' + id + 'deleted'),
        (err) => console.log(err),
        location.reload();
    })

  }
}