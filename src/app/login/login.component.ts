import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void 
  {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  }

  onSubmit(form: any): void {

    /** POST username, password, e-mail, and token to the backend */

    const data = new FormData();
    data.append('userName', form['userName']);
    data.append('password', form['password']);
    this.http.post('http://localhost:9999/login', data, { responseType: 'text', withCredentials: true })
      .subscribe((result) => {
        console.log(result);


        //set user name in local cookie
        this.cookieService.set('userName', data.get('userName')!.toString(), { path: "/" });
        

        // If the user logs in successfully, redirect to other pages upon user status: rejected, pending, or approved.
        // Otherwise, let the user stay in same page if it's invalid username or password. 
        if (result == "HR"){
          this.router.navigate(['hrModule']);
          this.cookieService.set('status', data.get('userName')!.toString(), { path: "/" });
        }
         
        else if (result == "employee")
          this.router.navigate(['employeeModule']);
        else if (result == "pending")
          this.router.navigate(['employee/pending'])
        else if (result == "rejected")
          this.router.navigate(['employee/rejected'])
        else
          alert("Invalid Username or Password !");
      })
  }
}


