import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  constructor(private http: HttpClient) { }

  update(url: string, section: any) {
    return this.http.post('http://localhost:8081/employee/update/' + url, section, { responseType: 'json', withCredentials: true });
  }
  logout() {
    return this.http.get('http://localhost:9999/logout', { responseType: 'text', withCredentials: true });
  }
}
