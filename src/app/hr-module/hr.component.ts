import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.toStatusTracking()
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
