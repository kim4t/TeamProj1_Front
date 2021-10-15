import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private https: HttpClient) { }
  pushFileToStorage(file: File): Observable<string> {
    const data: FormData = new FormData();
    const fileName = file.name;
    const url = "https://teamproj1bucket.s3.us-east-2.amazonaws.com/" + fileName;
    data.append('file', file);
    data.append('url', url);
    //https://teamproj1bucket.s3.us-east-2.amazonaws.com/'+this.file)
    return this.https.post('http://localhost:8081/uploadFile', data, {responseType: 'text'})

    /*
    const newRequest = new HttpRequest('POST', 'http://localhost:8081/uploadFile', data, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.https.request(newRequest);
    */
  }
}
