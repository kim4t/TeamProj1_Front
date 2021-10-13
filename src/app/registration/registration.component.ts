import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';
 '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm)
  {
      /** POST: add a new e-mail to the database */
      /** default url 8081, you could specify path in future */
    this.http.post('http://localhost:8081', data)
    .subscribe((result)=>{
      console.warn("result", result)
    })
    console.warn(data);
  }
  
}
