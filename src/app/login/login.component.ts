import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void 
  {
    
  }

  go(): void
  {
    //navigate to other page
    this.router.navigate(['/SendE-mail']);
  }

  onSubmit(data: NgForm)
  {
      /** POST: send username and password to back-end */
      /** default url 8082, you could specify path in future */
    this.http.post('http://localhost:8081/login', data)
    .subscribe((result)=>{
      console.warn("result", result)
    })
    console.warn(data);
  }

  
}


