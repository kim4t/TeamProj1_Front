import { Component, ElementRef, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {

  constructor(private http: HttpClient, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  onSubmit(form: any)
  {
      /** POST: add a new e-mail to the database */
      /** default url 8081, you could specify path in future */
    let data  = new FormData();
    data.append('e-mail', form['e-mail']);
    this.http.post('http://localhost:8081/HR/email', data, {responseType: 'text'})
    .subscribe((result)=>{
      console.log(result);
    })
  }
  
  ngAfterViewInit() 
  {
    /** this function is for color change, but there is a bug
     *  When we go back to last page, the background-color reflects.
     * */ 
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#76b852';
  }
}
