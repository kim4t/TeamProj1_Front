import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm)
  {
      /** POST: send username and password to back-end */
      /** default url 8082, you could specify path in future */
    this.http.post('http://localhost:8081', data)
    .subscribe((result)=>{
      console.warn("result", result)
    })
    console.warn(data);
  }
}
