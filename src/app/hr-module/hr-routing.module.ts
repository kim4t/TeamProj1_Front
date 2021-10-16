import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { SendemailComponent } from '../sendemail/sendemail.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';
import { StatusTrackingComponent } from './status-tracking/status-tracking.component';
const routes: Routes = [

  {
    path: '', component: HrComponent,
    children: [
       { path: 'employeeProfile', component: EmployeeProfileComponent },
       { path: 'sendEmail', component: SendemailComponent },
       { path: 'statusTracking', component: StatusTrackingComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
