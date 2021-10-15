import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { SendemailComponent } from './sendemail/sendemail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule} from '@angular/material/icon';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { RegistrationComponent } from './registration/registration.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HrHomepageComponent } from './hr-module/hr-homepage/hr-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SendemailComponent,
    OnboardingComponent,
    RegistrationComponent,
    FileUploadComponent,
    HrHomepageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
