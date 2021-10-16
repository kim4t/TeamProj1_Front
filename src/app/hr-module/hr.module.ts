import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';


@NgModule({
  declarations: [
    HrComponent,
    VisaStatusManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HrRoutingModule
  ]
})
export class HrModule { }
