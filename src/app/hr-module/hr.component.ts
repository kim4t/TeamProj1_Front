import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HrHttpService } from './services/hr-http.service';


@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService, private hrHttpService: HrHttpService) { }

  userName!: string;

  ngOnInit(): void {
    this.userName = this.cookieService.get('userName');
    this.toStatusTracking()
  }

  logout(): void {
    this.hrHttpService.logout().subscribe(
      (res) => {
        console.log(res);
        this.cookieService.delete('userName', '/');
        this.cookieService.delete('status', '/');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  toEmployeeProfile(): void {
    this.router.navigate(['hrModule/employeeProfile']);
  }

  toSendEmail(): void {
    this.router.navigate(['hrModule/sendEmail']);
  }

  toStatusTracking(): void {
    this.router.navigate(['hrModule/statusTracking']);
  }

  toApplicationReview(): void {
    this.router.navigate(['hrModule/applicationReview']);
  }

}
