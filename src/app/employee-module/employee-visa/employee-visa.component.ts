import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeeVisa, personalDocument } from './employee-visa-model';
import { UploadFileService } from 'src/app/Service/upload-file.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-employee-visa',
  templateUrl: './employee-visa.component.html',
  styleUrls: ['./employee-visa.component.css']
})
export class EmployeeVisaComponent implements OnInit {
  stage = 0;
  data: employeeVisa;
  selectedFile: File;
  userName!: string;
  needInform: boolean;
  pageComplete: boolean = false;
  newVisaStage: string;


  constructor(private http: HttpClient, private uploadService: UploadFileService, private cookieService: CookieService) { }

  filePreview(doc: personalDocument) {
    window.open(doc.path, "_blank");
    console.log(doc);
  }

  selectOPTEAD(event) {
    this.selectedFile = event.target.files.item(0);
  }
  selectI983(event) {
    this.selectedFile = event.target.files.item(0);
  }
  selectI20(event) {
    this.selectedFile = event.target.files.item(0);
  }
  selectSTEMReceipt(event) {
    this.selectedFile = event.target.files.item(0);
  }
  selectOPTSTEMEAD(event) {
    this.selectedFile = event.target.files.item(0);
  }

  uploadFile(id: number) {
    this.uploadService.pushFileToStorage(this.selectedFile).subscribe(event => {
      let newTitile = "";
      switch (this.stage) {
        case 1:
          newTitile = "OPT EAD file";
          break;
        case 2:
          newTitile = "I-983 file";
          break;
        case 3:
          newTitile = "I-20 file";
          break;
        case 4:
          newTitile = "STEM Receipt";
          break;
        case 5:
          newTitile = "OPT STEM EAD";
          break;
        default:
          return;
      }
      newTitile = this.userName + '_' + newTitile;
      console.log(newTitile)
      let newDoc: personalDocument = {
        path: event,
        title: newTitile
      }
      this.http.post('http://localhost:8081/employee/visa/upload', newDoc, { responseType: 'json', withCredentials: true }).subscribe((result) => {
        console.log(result);
        document.getElementById("uploadRes" + this.stage).innerHTML = "Done";
      }, (err) => {
        console.log(err);
      }
      )
    }, err => {
      console.log(err.message);
    });
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8081/employee/visa/homePage', { responseType: 'json', withCredentials: true }).subscribe(
      (data: employeeVisa) => {
        console.log(data);
        this.data = data;
        switch (data.visaStage.type) {
          case "F1(OPT)":
            this.stage = -1;
            break;
          case "OPT Receipt":
            this.stage = 1;
            break;
          case "OPT EAD":
            this.stage = 2;
            break;
          case "I-983":
            this.stage = 3;
            break;
          case "I-20":
            this.stage = 4;
            break;
          case "OPT STEM Receipt":
            this.stage = 5;
            break;
          case "OPT STEM EAD":
            this.stage = 6;
            break;
          default:
            this.stage = 0;
        }
        this.userName = this.cookieService.get('userName');
        this.data.visaDocumentList.sort(function (a, b) {
          return new Date(b.createDate).getTime() - new Date(a.createDate).getTime();
        });
        let timeDiff = Math.abs(Date.now() - new Date(this.data.visaStage.visaEndDate).getTime());
        let remainDays = Math.floor(timeDiff / (1000 * 3600 * 24));
        this.needInform = remainDays <= 100;
        this.pageComplete = true;
      }, (err) => {
        console.log(err);
      }
    )


  }

}
