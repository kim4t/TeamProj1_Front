import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';

export interface applicationFormList{
  statusElement: applicationForm[]
}

export interface applicationForm {
  employeeId:Number,
  lastModifiedDate:String,
  type: String,
  status:String,
  
}


@Component({
  selector: 'app-application-review',
  templateUrl: './application-review.component.html',
  styleUrls: ['./application-review.component.css']
})
export class ApplicationReviewComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  dataSource;
  filterTerm: string;

  ngOnInit(): void {
    this.http.get<applicationForm>('http://localhost:8081/hrModule/applicationReview')
    .subscribe((result) =>
    {
      
      this.dataSource = result;
      console.log(this.dataSource)
      
    }
    )
  }

  //TODO: filter applicationForm only for onboarding and F1
  

}
