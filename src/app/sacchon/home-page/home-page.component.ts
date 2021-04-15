import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  focus:any
  focus1: any
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  getToRegistration(){
    this.router.navigate(['Registration']);
  }

}
