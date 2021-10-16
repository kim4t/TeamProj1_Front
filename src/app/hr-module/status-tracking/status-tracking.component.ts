import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';
import { CompileShallowModuleMetadata } from '@angular/compiler';

export interface statusElementList{
  statusElement: statusElement[]
}

export interface statusElement {
  employeeId:Number,
  firstName:String,
  lastName: String,
  middleName:String,
  status:String,
  visaEndDate:String,
  dayLeft:Number
}

@Component({
  selector: 'app-status-tracking',
  templateUrl: './status-tracking.component.html',
  styleUrls: ['./status-tracking.component.css']
})
export class StatusTrackingComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  originalDataSource;
  dataSource;

  displayedColumns: string[] = ['employeeId','firstName', 'middleName', 'lastName', 'status', 'visaEndDate', 'dayLeft'];

  ngOnInit(): void {
    this.http.get<statusElementList>('http://localhost:8081/hrModule/statusTracking')
    .subscribe((result) =>
    {
      
      this.dataSource = result;
      this.originalDataSource = result;
      console.log(this.dataSource)
      
    }
    )
  }


}