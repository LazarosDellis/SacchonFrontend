import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Consultations } from 'src/app/consultations';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-put-consult',
  templateUrl: './post-put-consult.component.html',
  styleUrls: ['./post-put-consult.component.scss']
})
export class PostPutConsultComponent implements OnInit {

  createConsultForm: FormGroup
  consultId: number;

  constructor(private fb: FormBuilder,
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe) { }



  ngOnInit(): void {
    this.createConsultForm = this.fb.group({
      consult: ["", Validators.required],
      date: [""],
      patientId: ["", Validators.required],
      doctorId: ["", Validators.required]
    })


    this.route.params.subscribe(p => {

      this.consultId = p.id

      if (this.consultId) {
        this.getConsultation(this.consultId)

      }
    })
  }

  getConsultation(id: number) {
    this.doctorService.getConsultationById(id).subscribe(
      (data) => {
        this.editConsult(data.data)
      },
      (err: any) => console.log(err)
    );
  }


  editConsult(data: Consultations) {
    console.log(data)
    this.createConsultForm.patchValue({
      consult: data.consult,
      date: this.datePipe.transform(data.date, "yyyy-MM-dd"),
      patientId: data.patientId,
      doctorId: data.doctorId
    })
  }

  onSumbit() {
    let newConsult: Consultations = this.createConsultForm.value;

    if (this.consultId) {
      this.doctorService.editConsult(this.consultId, newConsult.doctorId, newConsult).subscribe(result => {
        console.log(result)
        this.router.navigate(['/doctor'])
      })
    } else {
      this.doctorService.postConsultation(newConsult).subscribe(result => {
        console.log(result)
        this.router.navigate(['/doctor'])
      })
    }
  }
}




