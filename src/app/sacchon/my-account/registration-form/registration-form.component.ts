import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountInfo } from 'src/app/account-info';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private router: Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullname:["", Validators.required],
      username:["", Validators.required],
      emailAddress:["", Validators.email],
      password:["", Validators.required],
      repeatPassword:["", Validators.required],
      role:["", Validators.required]
    })
  }

  createAccount(){
    let newAccount : AccountInfo = this.registrationForm.value;
    
  }



  getToLogin(){
    this.router.navigate(['MyAccount'])
  }


}
