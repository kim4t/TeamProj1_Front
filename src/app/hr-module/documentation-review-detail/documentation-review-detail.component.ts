import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';

export interface documentationList{
  documentation:documentation[]
}
export interface documentation{
    id:number,
    path:String,
    title:String
}

@Component({
  selector: 'app-documentation-review-detail',
  templateUrl: './documentation-review-detail.component.html',
  styleUrls: ['./documentation-review-detail.component.css']
})
export class DocumentationReviewDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  dataSource;
  employeeId;
  fileTitle;
  comment;
  filterTerm;
  downloadUrl;
  isPermenent:boolean = false;
  
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
       
        this.employeeId = params.employeeId;
        this.fileTitle = params.type;
        console.log("File Title: "+this.fileTitle)
      }
    );
    
    this.checkPermenent();
    this.get();

   
  }
  get(){
    if(this.fileTitle == 'applying OPT Receipt'){
      this.fileTitle = 'OPT Receipt'
    }

    else if(this.fileTitle == 'OPT Receipt'){
        this.fileTitle = 'OPT EAD'
    }
    else if(this.fileTitle == 'OPT EAD'){
      this.fileTitle = 'I-983'
    }
    else if(this.fileTitle == 'I-983'){
      this.fileTitle = 'I-20'
    }
    else if(this.fileTitle == 'I-20'){
      this.fileTitle = 'OPT STEM Receipt'
    }
    else if(this.fileTitle == 'OPT STEM Receipt'){
      this.fileTitle = 'OPT STEM EAD'
    }
    else if(this.fileTitle == 'OPT STEM EAD'){
      this.fileTitle = ''
    }
    
    let data  = new FormData();
    data.append('employeeId', this.employeeId);
    data.append('title',this.fileTitle+' file')
      console.log(this.employeeId);
     
     this.http.post('http://localhost:8081/hrModule/documentationReviewDetail', data, {responseType: 'json', withCredentials: true})
     .subscribe((result) => { this.dataSource = result;  console.log(this.dataSource)})

     
    
  }


  viewFile(downloadUrl){
    this.downloadUrl = downloadUrl;
    window.open(this.downloadUrl);
  }


  approve(){

    let data = new FormData();
    data.append('employeeId', this.employeeId)
    data.append('status','OPT completed')
    data.append('comments',this.comment)
    data.append('type',this.fileTitle)
    this.http.post('http://localhost:8081/hrModule/documentationReviewDetail/update', data, {responseType: 'json', withCredentials: true})
    .subscribe((result) => {})
  }

  reject(){
    let data = new FormData();
    data.append('employeeId', this.employeeId)
    data.append('status','OPT rejected')
    data.append('comments',this.comment)
    data.append('type',this.fileTitle)
    this.http.post('http://localhost:8081/hrModule/documentationReviewDetail/update', data, {responseType: 'json', withCredentials: true})
    .subscribe((result) => {})
  }

  checkPermenent(){
    if(this.fileTitle == 'Green Card' || this.fileTitle == 'Citizen'){
      this.isPermenent = true;
    }
    else{
      this.isPermenent = false;
    }
   
  }
}
