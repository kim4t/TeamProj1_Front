import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Form, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { emergencyContact } from '../model/emergencyContact.model';
import { onboarding } from '../model/onboarding.model';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  emergencyContact: emergencyContact[] = [];
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  

  ngOnInit(): void  { }

  onSubmit(form: NgForm)
  {
      /** Send all the field data in On-Boarding Page as form-data type to backend  */
    //for ( var key in form ) {
    //  data.append(key, form[key]);
    //}
    // data.append('firstName', form['firstName']);
    // data.append('lastName', form['lastName']);
    // data.append('middleName', form['middleName']);
    // data.append('gender', form['gender']);
    // data.append('cellphone', form['cellphone']);
    // data.append('alternatePhone', form['alternatePhone']);
    // data.append('DOB', form['DOB']);
    // data.append('SSN', form['SSN']);
    // data.append('addressline1', form['addressline1']);
    // data.append('addressline2', form['addressline2']);
    // data.append('zipcode', form['zipcode']);
    // data.append('city', form['city']);
    // data.append('state', form['state']);
    // data.append('visa', form['visa']);
    // data.append('driverlicense', form['driverlicense']);
    // data.append('emergencyContact', form['emergencyContact']);
    let onboardingInfo: onboarding;
    onboardingInfo = form.value;
    onboardingInfo.emergencyContact = this.emergencyContact;

    this.http.post('http://localhost:8081/employee/onboard ', onboardingInfo)
    .subscribe((result)=>{
      console.log(result);
    })
  }

  addEmergencyContact(): void 
  {
    // create new object of emergencyContact
    let e: emergencyContact = {
      firstName: '',
      lastName: '',
      middleName: '',
      cellphone: '',
      email: '',
      relationship: '',
      index: 0
    };

    e.index = this.emergencyContact.length;
    this.emergencyContact.push(e);
  }

  minusEmergencyContact(): void
  {
    //this.emergencyContact.pop(e);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
