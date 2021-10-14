import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [
    EmployeeHomepageComponent,
    EmployeeComponent,
    EmployeeRoutingModule
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
