import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit(): void  { }

  onSubmit(form: any)
  {
      /** Send all the field data in On-Boarding Page as form-data type to backend  */

    let data  = new FormData();

    data.append('firstName', form['firstName']);
    data.append('lastName', form['lastName']);
    data.append('middleName', form['middleName']);
    data.append('gender', form['gender']);
    data.append('cellphone', form['cellphone']);
    data.append('alternatePhone', form['alternatePhone']);
    data.append('DOB', form['DOB']);
    data.append('SSN', form['SSN']);
    /*data.append('addressline1', form['addressline1']);
    data.append('addressline2', form['addressline2']);
    data.append('zipcode', form['zipcode']);
    data.append('city', form['city']);
    data.append('state', form['state']);
    data.append('visa', form['visa']);
    data.append('driverlicense', form['driverlicense']);*/

    this.http.post('http://localhost:8081//employee/onboard', data, {responseType: 'text'})
    .subscribe((result)=>{
      console.log(result);
    })
  }
}
