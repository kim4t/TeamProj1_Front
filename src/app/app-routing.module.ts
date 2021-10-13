import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SendemailComponent } from './sendemail/sendemail.component';

const routes: Routes = [
  // specify Login component 
  {
    path: '', 
    component: LoginComponent
  },
  {
    // specify Registration Component
    path: 'SendE-mail',
    component: SendemailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
