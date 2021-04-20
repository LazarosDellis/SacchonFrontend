import { CommonModule } from '@angular/common';
import { CheckPatientDataComponent } from './sacchon/chief-doctor/check-patient-data/check-patient-data.component';
import { DoctorComponent } from './sacchon/doctor/doctor.component';
import { ChiefDoctorComponent } from './sacchon/chief-doctor/chief-doctor.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './sacchon/home-page/home-page.component';

import { MyAccountComponent } from './sacchon/my-account/my-account.component';
import { RegistrationFormComponent } from './sacchon/my-account/registration-form/registration-form.component';
import { PatientComponent } from './sacchon/patient/patient.component';
import { SacchonModule } from './sacchon/sacchon.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'chiefDoctor', component: ChiefDoctorComponent },
  { path: 'MyAccount', component: MyAccountComponent },
  { path: 'Registration', component: RegistrationFormComponent },
  { path: 'homepage', component: HomePageComponent },
  {path: 'contactUs', component: ContactUsComponent},
  { path: 'checkDataPatient', component: CheckPatientDataComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SacchonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
