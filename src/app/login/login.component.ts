import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http'; import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {

  }

  onSubmit(form: any) {

    /** POST username, password, e-mail, and token to the backend */

    let data = new FormData();
    data.append('userName', form['userName']);
    data.append('password', form['password']);
    this.http.post('http://localhost:9999/login', data, { responseType: 'text', withCredentials: true })
      .subscribe((result) => {
        console.log(result);


        //set user name in local cookie
        this.cookieService.set('userName', data.get('userName')!.toString(), { path: "/" });

        // If the user logs in successfully, redirect to other pages upon user status: rejected, pending, or approved.
        // Otherwise, let the user stay in same page if it's invalid username or password. 
        if (result == "HR")
          this.router.navigate(['hrModule']);
        else if (result == "employee")
          this.router.navigate(['employeeModule']);
        else
          alert("Invalid Username or Password !");
      }

      )
  }

}


