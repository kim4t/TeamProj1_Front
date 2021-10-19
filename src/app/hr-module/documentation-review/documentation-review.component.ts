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
  selector: 'app-documentation-review',
  templateUrl: './documentation-review.component.html',
  styleUrls: ['./documentation-review.component.css']
})
export class DocumentationReviewComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  dataSource;
  filterTerm: string;
  employeeId: number;
  type:String;

  path: String;
  ngOnInit(): void {
    this.http.get<applicationForm>('http://localhost:8081/hrModule/applicationReview')
    .subscribe((result) =>
    {
      
      this.dataSource = result;
      
      
    }
    )
  }

  onSubmit(form: any)
  {
    
    this.router.navigate(['/hrModule/documentationReviewDetail'],{ queryParams: { employeeId: this.employeeId , type: this.type} });    

  }

  setting(employeeId,type){
    this.employeeId = employeeId
    this.type = type
  }

}
