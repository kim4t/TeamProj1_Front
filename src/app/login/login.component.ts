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

  onSubmit(form: any)
  {

      /** POST username, password, e-mail, and token to the backend */

    let data  = new FormData();
    data.append('userName', form['userName']);
    data.append('password', form['password']);
    this.http.post('http://localhost:9999/login', data, {responseType: 'text'})
    .subscribe((result)=>
    {
      console.log(result);

      // If the user logs in successfully, redirect to other pages upon user status: rejected, pending, or approved.
      // Otherwise, let the user stay in same page if it's invalid username or password. 
      if(result == "HR")
        this.router.navigate(['/HR/homePage']);
      else if(result == "employee")
        this.router.navigate(['/employee/homePage']);
      else
        alert("Invalid Username or Password !");
    }
      
    )
  }
  
}


