import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { PendingComponent } from './pending/pending.component';
import { RejectedComponent } from './rejected/rejected.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginGuard } from './guards/login.guard';
const routes: Routes = [
  {
    // specify Login component 
    path: '',  
    component: LoginComponent
  },
  {
    // specify Send Email Component
    path: 'SendE-mail',
    component: SendemailComponent
  },
  {
    // specify On-Boarding Component
    path: 'employee/on-boarding',
    component: OnboardingComponent,
  },
  {
    // after sending onboarding request
    path: 'employee/pending',
    component: PendingComponent,
  },
  {
    // 
    path: 'employee/rejected',
    component: RejectedComponent,
  },
  {
    // specify Registration Component
    path: 'login/register',
    component: RegistrationComponent,
  },
  {
    path: 'employeeModule',
    canActivate: [LoginGuard],
    loadChildren: () => import('./employee-module/employee.module').then(m => m.EmployeeModule),
  },
  {
    path: 'hrModule',
    canActivate: [LoginGuard],
    loadChildren: () => import('./hr-module/hr.module').then(h => h.HrModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
