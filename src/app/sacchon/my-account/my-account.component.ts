import { UserType } from './../../user-type';
import { Login } from './../../login';
import { LogInRegisterService } from './log-in-register.service';
import { AccountInfo } from 'src/app/account-info';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  loginForm: FormGroup
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginRegister: LogInRegisterService
  ) { }

  userType: UserType
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]

    })

  }

  logIn() {
    let username: string;
    let password: string;
    // let logIn: Login = this.loginForm.value;
    this.loginRegister.authentication(this.loginForm.value).subscribe(data => {
      this.userType = data;
      if (this.userType.role == 1) {
        let idPatient =    this.userType.id
        username = this.loginForm.get('username').value;
        password = this.loginForm.get('password').value;
        this.loginRegister.logged();
        sessionStorage.setItem("credentials", username + ":" + password);
        this.router.navigate(['/patient', idPatient])
      }
      else if(this.userType.role == 2){
        let idDoctor = this.userType.id
        username = this.loginForm.get('username').value;
        password = this.loginForm.get('password').value;
        this.loginRegister.logged();
        sessionStorage.setItem("credentials", username + ":" + password);
        this.router.navigate(['/doctor', idDoctor])
      }
      else if(this.userType.role == 3 ){
        let idChiefDoctor = this.userType.id
        username = this.loginForm.get('username').value;
        password = this.loginForm.get('password').value;
        this.loginRegister.logged();
        sessionStorage.setItem("credentials", username + ":" + password);
        this.router.navigate(['/chiefDoctor', idChiefDoctor])
      }
      
      else {

        alert("Invalid Username or Password");
      }
    }
    )
    //let info: AccountInfo = this.loginForm.value;


  }

  getToRegistration() {
    this.router.navigate(['Registration']);
  }

}
