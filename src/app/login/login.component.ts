import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void 
  {
    
  }

  go(): void
  {
    //navigate to other page
    this.router.navigate(['/SendE-mail']);
  }

  
}


