import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeHomepageComponent } from './employee-module/employee-homepage/employee-homepage.component';
import { HrHomepageComponent } from './hr-module/hr-homepage/hr-homepage.component';
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
    // specify EmployeeHompage Component
    path: 'employee/homePage',
    component: EmployeeHomepageComponent,
  },
  {
    // specify EmployeeHompage Component
    path: 'HR/homePage',
    component: HrHomepageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
