import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {

  constructor(private http: HttpClient, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm)
  {
      /** POST: add a new e-mail to the database */
      /** default url 8081, you could specify path in future */
    this.http.post('http://localhost:8081/HR/email', data)
    .subscribe((result)=>{
      console.warn("result", result)
    })
    console.warn(data);
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
