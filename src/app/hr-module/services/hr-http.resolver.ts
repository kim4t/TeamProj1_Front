import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { statusElementList } from '../status-tracking/status-tracking.component';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrHttpResolver implements Resolve<statusElementList> {

  constructor(private http: HttpClient){}
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
  //   throw new Error('Method not implemented.');
  // }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<statusElementList> {
    return this.http.get<statusElementList>('http://localhost:8081/hrModule/statusTracking', { responseType: 'json', withCredentials: true })
    }
}
