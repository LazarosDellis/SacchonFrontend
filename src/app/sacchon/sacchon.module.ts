import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './my-account/registration-form/registration-form.component';
import { HomePageComponent } from './home-page/home-page.component';




@NgModule({
  declarations: [PatientComponent, MyAccountComponent, RegistrationFormComponent, HomePageComponent],
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
