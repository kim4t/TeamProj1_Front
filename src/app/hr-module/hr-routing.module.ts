import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { SendemailComponent } from '../sendemail/sendemail.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';
import { StatusTrackingComponent } from './status-tracking/status-tracking.component';
import { ApplicationReviewComponent } from './application-review/application-review.component';
import { ApplicationReviewDetailComponent } from './application-review-detail/application-review-detail.component';


const routes: Routes = [
 
  {
    path: '', component: HrComponent,
   
    children: [
       { path: 'employeeProfile', component: EmployeeProfileComponent },
       { path: 'sendEmail', component: SendemailComponent },
       { path: 'statusTracking', component: StatusTrackingComponent },
       { path: 'applicationReview', component: ApplicationReviewComponent },
       { path: 'applicationReviewDetail',component:ApplicationReviewDetailComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
