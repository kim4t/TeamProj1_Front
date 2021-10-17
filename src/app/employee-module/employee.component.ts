import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeHttpService } from './services/employee-http.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService, private employeeHttpService: EmployeeHttpService) { }
  userName!: string;
  ngOnInit(): void {
    this.userName = this.cookieService.get('userName');
  }

  logout(): void {
    this.employeeHttpService.logout().subscribe(
      (res) => {
        console.log(res);
        this.cookieService.delete('userName', '/');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  toWelcome(): void {
    this.router.navigate(['employeeModule/welcome']);
  }

  toInfo(): void {
    this.router.navigate(['employeeModule/info']);
  }

  toVisa(): void {
    this.router.navigate(['employeeModule/visa']);
  }

  toHouse(): void {
    this.router.navigate(['employeeModule/house']);
  }
}
