import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';


export interface applicationFormDetail {
    firstName: String;
    lastName: String;
    middleName: String;
    gender: String;
    cellphone: String;
    alternatePhone: String;
    dob: String;
    ssn: String;
    avatar: String;
    addressLine1: String;
    addressLine2: String;
    city: String;
    stateAbbr: String;
    stateName: String;
    zipCode: String;
    car: String;
    visaType: String;
    visaStartDate: String;
    visaEndDate: String;
    visaDocumentPath: String;
    driverLicense: String;
    driverLicenseExpirationDate: String;
    driverLicenseDocumentPath: String;
    firstNameRef: String;
    lastNameRef: String;
    middleNameRef: String;
    cellphoneRef: String;
    emailRef: String;
    relationshipRef: String;
    addressLine1Ref: String;
    addressLine2Ref: String;
    cityRef: String;
    stateAbbrRef: String;
    stateNameRef: String;
    zipCodeRe: String;
    emergencyContact: emergencyContact[];
}
export interface emergencyContact{
  firstName: String;
  lastName: String;
  middleName: String;
  cellphone: String;
  email: String;
  relationship: String;
}



@Component({
  selector: 'app-application-review-detail',
  templateUrl: './application-review-detail.component.html',
  styleUrls: ['./application-review-detail.component.css']
})
export class ApplicationReviewDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  dataSource;
  employeeId;

  comment;
  
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.employeeId = params.employeeId;
        console.log(this.employeeId);
      }
    );
        
    this.get();

   
  }

  get(){
    let data  = new FormData();
    data.append('employeeId', this.employeeId);

      console.log(this.employeeId);
     
     this.http.post<applicationFormDetail>('http://localhost:8081/hrModule/applicationReviewDetail', data, {responseType: 'json', withCredentials: true})
     .subscribe((result) => { this.dataSource = result;  console.log(this.dataSource)})
  }

  approve(){
    let data = new FormData();
    data.append('employeeId', this.employeeId)
    data.append('status','Onboarding completed')
    data.append('comments',this.comment)
    this.http.post('http://localhost:8081/hrModule/applicationReviewDetail/update', data, {responseType: 'json', withCredentials: true})
    .subscribe((result) => {})
  }

  reject(){
    let data = new FormData();
    data.append('employeeId', this.employeeId)
    data.append('status','Onboarding rejected')
    data.append('comments',this.comment)
    
    this.http.post('http://localhost:8081/hrModule/applicationReviewDetail/update', data, {responseType: 'json', withCredentials: true})
    .subscribe((result) => {})
  }
}
