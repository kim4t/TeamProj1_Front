import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';
import { StatusTrackingComponent } from './status-tracking/status-tracking.component';
//import { MatTableModule } from '@angular/material/table' 
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterComponent } from './search-filter/search-filter.component'; 
import { FormsModule } from '@angular/forms'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    HrComponent,
    VisaStatusManagementComponent,
    StatusTrackingComponent,
    SearchFilterComponent
  ],
  imports: [
   
    CommonModule,
    RouterModule,
    HrRoutingModule,
    //MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    
    
  ]
})
export class HrModule { }
