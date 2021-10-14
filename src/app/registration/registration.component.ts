import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  email = "";
  token = "";
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {

        // Query Param used to receive the email and token
        console.log(params);
        this.email = params.email;
        this.token = params.token;

        // send email and token to backend for verification

        
      }
    );
  }

  onSubmit(form: any)
  {

      /** POST username, password, e-mail, and token to the database */

    let data  = new FormData();
    data.append('userName', form['userName']);
    data.append('password', form['password']);
    data.append('email', this.email);
    data.append('token', this.token);
    this.http.post('http://localhost:8081/login/register', data, {responseType: 'text'})
    .subscribe((result)=>{
      console.log(result);
    })
    this.router.navigate(['/employee/on-boarding']);
  }

  go(): void
  {
    //navigate to other page
    this.router.navigate(['/employee/onboard']);
  }
}
