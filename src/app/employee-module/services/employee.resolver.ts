import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { personalInfo } from '../employee-personal-information/employee-personal-information-model';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<personalInfo> {

  constructor(private http: HttpClient){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<personalInfo> {
    return this.http.get<personalInfo>('http://localhost:8081/employee/homePage', { responseType: 'json', withCredentials: true })
  }
  
}
