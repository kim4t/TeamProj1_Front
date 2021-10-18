import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Form, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { emergencyContact } from '../model/emergencyContact.model';
import { onboarding } from '../model/onboarding.model';
import { referencePerson } from '../model/referencePerson.model';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  emergencyContact: emergencyContact[] = [];
  referencePerson: referencePerson[] = [];
  isDisabled = false;
  RefNumber = 0;
  visaType= " ";
  checkVisaType= "";
  selected = -1;
  checkDriverLicense = "";   
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  

  ngOnInit(): void  { }

  onSubmit(form: NgForm)
  {
    
    let onboardingInfo: onboarding;
    onboardingInfo = form.value;
    onboardingInfo.emergencyContact = this.emergencyContact;

    /*  Send file to backend as JSON data type */
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

  addReferencePerson(): void 
  {
    // create new object of referencePerson
    let r: referencePerson = {
    firstNameRef: '',
    lastNameRef: '',
    middleNameRef: '',
    cellphoneRef: '',
    emailRef: '',
    relationshipRef: '',
    addressLine1Ref: '',
    addressLine2Ref: '',
    cityRef: '',
    stateAbbrRef: '',
    stateNameRef: '',
    zipCodeRef : '',
    index: 0
    };

    this.referencePerson.push(r);
  
    if(this.isDisabled)
    {
      alert("You Can Only Add One Reference Person !");
    }
    this.isDisabled = true;
  }

  check() {
    console.log(this.checkVisaType);
  }
  minusEmergencyContact(): void
  {
    //this.emergencyContact.pop(e);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
