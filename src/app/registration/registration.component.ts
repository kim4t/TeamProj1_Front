import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IfStmt } from '@angular/compiler';

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
      }
      
    );
  }

  onSubmit(form: any)
  {

      /** POST username, password, e-mail, and token to the backend */

    let data  = new FormData();
    for ( var key in form ) {
      data.append(key, form[key]);
    }
    //data.append('userName', form['userName']);
    //data.append('password', form['password']);
    data.append('email', this.email);
    data.append('token', this.token);
    this.http.post('http://localhost:8081/login/register', data, {responseType: 'text'})
    .subscribe((result)=>
    {
      console.log(result);

      // If the result == Succeed, redirect the user to On-boarding page.
      // Otherwise, show the error box and let the user stay in the same page.
      if(result == "Succeed")
        this.router.navigate(['/employee/on-boarding']);
      else if(result == "Exist User")
      this.router.navigate(['']);
      else
        alert("Stay here because " + result);
    }
      
    )
  }

}
