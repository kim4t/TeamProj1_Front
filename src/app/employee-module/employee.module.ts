import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeWelcomeComponent } from './employee-welcome/employee-welcome.component';
import { EmployeePersonalInformationComponent } from './employee-personal-information/employee-personal-information.component';
import { EmployeeHouseComponent } from './employee-house/employee-house.component';
import { EmployeeVisaComponent } from './employee-visa/employee-visa.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeWelcomeComponent,
    EmployeePersonalInformationComponent,
    EmployeeHouseComponent,
    EmployeeVisaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmployeeRoutingModule,
    
  ]
})
export class EmployeeModule { }
