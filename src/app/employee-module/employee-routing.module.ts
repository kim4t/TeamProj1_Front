import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeWelcomeComponent } from './employee-welcome/employee-welcome.component';
import { EmployeePersonalInformationComponent } from './employee-personal-information/employee-personal-information.component';
import { EmployeeHouseComponent } from './employee-house/employee-house.component';
const routes: Routes = [
  {
    path: '', component: EmployeeComponent,
    children: [
      { path: 'welcome', component: EmployeeWelcomeComponent },
      { path: 'info', component: EmployeePersonalInformationComponent },
      { path: 'house', component: EmployeeHouseComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
