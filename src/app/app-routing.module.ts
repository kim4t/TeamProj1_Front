import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { RegistrationComponent } from './registration/registration.component';
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
    // specify Registration Component
    path: 'login/register',
    component: RegistrationComponent,
  },
  {
    path: 'employeeModule',
    loadChildren: () => import('./employee-module/employee.module').then(m => m.EmployeeModule),
  },
  {
    path: 'hrModule',
    loadChildren: () => import('./hr-module/hr.module').then(h => h.HrModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
