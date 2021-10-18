import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Form, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { emergencyContact } from '../model/emergencyContact.model';
import { onboarding } from '../model/onboarding.model';
import { referencePerson } from '../model/referencePerson.model';
import { FileType } from '../enum/fileType.enum';

enum IsVisa { YES, NO, NONE };
enum UserVisaType { CITIZEN = 'CITIZEN', GREENCARD = 'GREENCARD', NONE = 'NONE' };

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  emergencyContact: emergencyContact[] = [];
  avartarFileType = FileType.Avatar;
  visaFileType = FileType.Visa;
  driverLicenseFileType = FileType.DriverLicense;
  form_data = new FormData();
  referencePerson = new referencePerson();
  isDisabled = false;
  RefNumber = 0;
  currentVisaType: IsVisa = IsVisa.NONE;
  currentUserVisa: UserVisaType = UserVisaType.NONE;
  isVisaEnum = IsVisa;
  isUserVisaEnum = UserVisaType;
  visaType = "";
  email = "";
  checkVisaType= "";
  selected = -1;
  checkDriverLicense = "";   
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  gender = "";

  ngOnInit(): void  { 
    this.route.queryParams.subscribe(params => {

      // Query Param used to receive the email and token
      console.log(params);
      this.email = params.email;});
  }

  onSubmit(form: NgForm)
  {
    
    let onboardingInfo: onboarding;
    onboardingInfo = form.value;
    onboardingInfo.referencePerson = this.referencePerson;
    onboardingInfo.emergencyContact = this.emergencyContact;
    
    for ( var key in onboardingInfo ) {
        this.form_data.append(key, onboardingInfo[key]);
    }
    const url = "https://teamproj1bucket.s3.us-east-2.amazonaws.com";
    this.form_data.append('url', url);

    /*  Send file to backend as JSON data type */
    this.http.post('http://localhost:8081/employee/onboard ', this.form_data)
    .subscribe((result)=>{
      console.log(result);
    })
  }



  setFile(file: File, fileType: FileType) {
    if(fileType == FileType.Avatar) {
      this.form_data.delete('avatar');
      this.form_data.append('avatar', file, file.name);
    }
    else if(fileType == FileType.DriverLicense)
    {
      this.form_data.delete('driverLicense');
      this.form_data.append('driverLicense', file, file.name);
    }
    else if(fileType == FileType.Visa) {
      this.form_data.delete('visa');
      this.form_data.append('visa', file, file.name);
    }
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
    this.referencePerson = {
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

    this.isDisabled = true;
  }

  selectCheckBoxForIsCitizen(visaType: IsVisa) {
    if(this.currentVisaType == visaType) {
      this.currentVisaType = this.isVisaEnum.NONE;
      this.form_data.delete('visaType');
      return;
    }

    this.currentVisaType = visaType;
  }

  selectCheckBoxForVisaType(visaType: UserVisaType){
    if(this.currentUserVisa == visaType){
      this.currentUserVisa = this.isUserVisaEnum.NONE;
      this.form_data.delete('visaType');
      return;
    }

    this.currentUserVisa = visaType;
    this.visaType = visaType.toString();

    this.form_data.delete('visaType');
    this.form_data.append('visaType', this.visaType);
      
  }

  minusEmergencyContact(): void
  {
    //this.emergencyContact.pop(e);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
