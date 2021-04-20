import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './my-account/registration-form/registration-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ChiefDoctorComponent } from './chief-doctor/chief-doctor.component';
import { CheckPatientDataComponent } from './chief-doctor/check-patient-data/check-patient-data.component';




@NgModule({
  declarations: [PatientComponent, MyAccountComponent, RegistrationFormComponent, HomePageComponent, DoctorComponent, ChiefDoctorComponent, CheckPatientDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
   
    
  ],
  exports:[MyAccountComponent]
})
export class SacchonModule { 



  
}
