import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { personalInfo, personalDocument } from '../employee-module/employee-personal-information/employee-personal-information-model';
import { UploadFileService } from '../Service/upload-file.service';
@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.css']
})
export class RejectedComponent implements OnInit {
  pageComplete: boolean = false;
  info: personalInfo;
  tempInfo: personalInfo;
  selectedAvatar: File;
  avatarBtn: string = "upload";

  constructor(private router: Router, private http: HttpClient, private uploadService: UploadFileService) { }
  selectAvatar(event) {
    this.selectedAvatar = event.target.files.item(0);
  }
  uploadAvatar() {
    this.uploadService.pushFileToStorage(this.selectedAvatar).subscribe(event => {
      //get the download url from backend
      this.tempInfo.nameSection.avatar = event;
      this.avatarBtn = "Done";
    }, err => {
      console.log(err.message);
    });
  }

  filePreview(doc: personalDocument) {
    window.open(doc.path, "_blank");
    console.log(doc);
  }
  uploadDocument(event: any, id: number) {

    let doc = event.target.files.item(0);
    this.uploadService.pushFileToStorage(doc).subscribe(event => {
      //get the download url from backend
      this.tempInfo.personalDocumentList[id].path = event;
      //this.tempInfo.personalDocumentList[id].createDate = new Date(Date.now());
      document.getElementById("uploadRes" + id).innerHTML = "Done";
    }, err => {
      console.log(err.message);
    });
  }

  save() {
    this.http.post('http://localhost:8081/employee/onboard/update', this.tempInfo, { responseType: 'json', withCredentials: true }).subscribe(
      (res) => {
        console.log(res);
      }, (err) => {

      }
    );
  }

  ngOnInit(): void {

    this.http.get('http://localhost:8081/employee/onboard/rejected', { responseType: 'json', withCredentials: true }).subscribe(
      (data: personalInfo) => {
        console.log(data);
        if (data.appStatus != "rejected") {
          this.router.navigate(['employeeModule']);
        }
        this.info = data;
        this.tempInfo = JSON.parse(JSON.stringify(data));
        this.pageComplete = true;
      }, (err) => {
        console.log(err);
      }
    )

  }

}
