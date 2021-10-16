import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
