import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LogInRegisterService } from './sacchon/my-account/log-in-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'FrontSacchonProject';
  isLogged:boolean

  subscription: Subscription;

  constructor(private router:Router,
              private loginRegistrationService: LogInRegisterService){}
  
  ngOnInit(): void {
    if(sessionStorage.getItem("credentials") == null){
      this.isLogged = false;
      this.router.navigate(['/homepage'])
    }
    else{
      this.isLogged = true;
      this.router.navigate(['/homepage'])
    }

    this.subscription = this.loginRegistrationService.responseOfAuth.subscribe(data => {
      this.isLogged = data;
    })
   // this.isLogged= true;

  }
 

  
  logOut(){
    sessionStorage.removeItem("credentials");
    this.isLogged = false;
    this.router.navigate(['/login'])
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  

}
