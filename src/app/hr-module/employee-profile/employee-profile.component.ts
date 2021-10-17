import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';

export interface employeeProfileList{
  statusElement: employeeProfile[]
}

export interface employeeProfile {
  employeeId:Number,
  firstName:String,
  lastName: String,
  middleName:String,
  visaStartDate:String,
  visaStatus:String,
  ssn:String
}

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})

export class EmployeeProfileComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  dataSource;
  filterTerm: string;
  totalNumber: number
  ngOnInit(): void {
    this.http.get<employeeProfileList>('http://localhost:8081/hrModule/employeeProfile')
    .subscribe((result) =>
    {
      
      this.dataSource = result;
      this.totalNumber = this.dataSource.length
      console.log(this.dataSource)
    }
    )
  }
  
}
