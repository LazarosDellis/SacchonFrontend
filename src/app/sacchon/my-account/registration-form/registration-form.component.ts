import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountInfo } from 'src/app/account-info';
import { LogInRegisterService } from '../log-in-register.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private router: Router,
    private fb:FormBuilder,
    private register:LogInRegisterService
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullname:["", Validators.required],
      username:["", Validators.required],
      emailAddress:["", Validators.email],
      password:["", Validators.required],
     
      role:["", Validators.required]
    })
  }

  createAccount(){
    let newAccount : AccountInfo = this.registrationForm.value;
    this.register.createAccount(newAccount).subscribe(result => {
      console.log(result)
     this.router.navigate(['/homepage'])
    })

  }

  getToLogin(){
    this.router.navigate(['MyAccount'])
  }


}
