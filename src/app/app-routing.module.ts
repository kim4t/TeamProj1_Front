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
    // specify Registration Component
    path: 'SendE-mail',
    component: SendemailComponent
  },
  {
    // specify On-Boarding Component
    path: 'employee/on-boarding',
    component: OnboardingComponent,
  },
  {
    // specify registration Component
    path: 'login/register',
    component: RegistrationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
