import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HrHttpService {

  constructor(private http: HttpClient) { }

  
  logout() {
    return this.http.get('http://localhost:9999/logout', { responseType: 'text', withCredentials: true });
  }

}
