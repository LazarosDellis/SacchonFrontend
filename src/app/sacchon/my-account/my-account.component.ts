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
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:["", Validators.required],
      password:["", Validators.required]
     
    })
    
  }

  logIn(){
    let info: AccountInfo = this.loginForm.value;
    

  }

  getToRegistration(){
    this.router.navigate(['Registration']);
  }

}
