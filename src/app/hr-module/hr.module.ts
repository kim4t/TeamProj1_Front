import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';
import { StatusTrackingComponent } from './status-tracking/status-tracking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterComponent } from './search-filter/search-filter.component'; 
import { FormsModule } from '@angular/forms'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ApplicationReviewComponent } from './application-review/application-review.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { ApplicationReviewDetailComponent } from './application-review-detail/application-review-detail.component';
import { CookieService } from 'ngx-cookie-service';
import { DocumentationReviewComponent } from './documentation-review/documentation-review.component';
import { DocumentationReviewDetailComponent } from './documentation-review-detail/documentation-review-detail.component';


@NgModule({
  declarations: [
    HrComponent,
    VisaStatusManagementComponent,
    StatusTrackingComponent,
    SearchFilterComponent,
    ApplicationReviewComponent,
    ApplicationReviewDetailComponent,
    DocumentationReviewComponent,
    DocumentationReviewDetailComponent
  ],
  imports: [
   
    CommonModule,
    RouterModule,
    HrRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    
  ],
  providers:
  [CookieService],
})
export class HrModule { }
