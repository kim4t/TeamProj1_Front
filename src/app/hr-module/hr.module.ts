import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';
import { StatusTrackingComponent } from './status-tracking/status-tracking.component';
import { MatTableModule } from '@angular/material/table'  


@NgModule({
  declarations: [
    HrComponent,
    VisaStatusManagementComponent,
    StatusTrackingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HrRoutingModule,
    MatTableModule
  ]
})
export class HrModule { }
