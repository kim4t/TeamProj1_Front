import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeeVisa, personalDocument, visaStage } from './employee-visa-model';
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
  newOPTStep: string = "";
  status: string;

  constructor(private http: HttpClient, private uploadService: UploadFileService, private cookieService: CookieService) { }

  filePreview(doc: personalDocument) {
    window.open(doc.path, "_blank");
    console.log(doc);
  }
  samplePreview(url: string) {
    window.open("https://proj-angular-bucket.s3.us-east-2.amazonaws.com/" + url, "_blank");
  }

  selectFile(event) {
    this.selectedFile = event.target.files.item(0);
  }
  uploadSpecified() {
    let id = this.getStage(this.newOPTStep);
    //upload file
    //this.uploadFile(id - 1);
    id = id - 1;
    this.uploadService.pushFileToStorage(this.selectedFile).subscribe(event => {
      let newTitile = "";
      switch (id) {
        case 0:
          newTitile = "OPT Receipt file";
          break;
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
          newTitile = "OPT STEM Receipt file";
          break;
        case 5:
          newTitile = "OPT STEM EAD file";
          break;
        default:
          return;
      }
      console.log("newTitle: " + newTitile)
      let newDoc: personalDocument = {
        path: event,
        title: newTitile
      }
      this.http.post('http://localhost:8081/employee/visa/upload', newDoc, { responseType: 'json', withCredentials: true }).subscribe((result) => {
        //set to new type
        this.data.visaStage.type = this.toStage(id);
        this.http.post('http://localhost:8081/employee/visa/newStep', this.data.visaStage, { responseType: 'json', withCredentials: true }).subscribe((result) => {
          console.log(result);
          this.stage = this.getStage(this.data.visaStage.type);
          this.status = "OPT Pending"
        }, (err) => {
          console.log(err);
        }
        )
      }, (err) => {
        console.log(err);
      }
      )
    }, err => {
      console.log(err.message);
    });
  }

  getStage(stageName: string): number {
    let res = 0;
    switch (stageName) {
      case "F1(OPT)":
        res = -1;
        break;
      case "OPT Receipt":
        res = 1;
        break;
      case "OPT EAD":
        res = 2;
        break;
      case "I-983":
        res = 3;
        break;
      case "I-20":
        res = 4;
        break;
      case "OPT STEM Receipt":
        res = 5;
        break;
      case "OPT STEM EAD":
        res = 6;
        break;
      case "applying OPT Receipt":
        res = 8;
        break;
      default:
        res = 0;
    }
    return res;
  }

  toStage(index: number): string {
    switch (index) {
      case 0:
        return "applying OPT Receipt";
      case 1:
        return "OPT Receipt";
      case 2:
        return "OPT EAD";
      case 3:
        return "I-983";
      case 4:
        return "I-20";
      case 5:
        return "OPT STEM Receipt";
      case 6:
        return "OPT STEM EAD";
      default:
        return "other";
    }

  }

  uploadFile(id: number) {
    this.uploadService.pushFileToStorage(this.selectedFile).subscribe(event => {
      let newTitile = "";
      switch (id) {
        case 0:
          newTitile = "OPT Receipt file";
          break;
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
          newTitile = "OPT STEM Receipt file";
          break;
        case 5:
          newTitile = "OPT STEM EAD file";
          break;
        default:
          return;
      }
      //newTitile = this.userName + '_' + newTitile;
      console.log("newTitle: " + newTitile)
      let newDoc: personalDocument = {
        path: event,
        title: newTitile
      }
      this.http.post('http://localhost:8081/employee/visa/upload', newDoc, { responseType: 'json', withCredentials: true }).subscribe((result) => {
        console.log(result);
        document.getElementById("uploadRes" + this.stage).innerHTML = "Done";
        this.status = "OPT Pending"
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
        this.stage = this.getStage(data.visaStage.type);
        this.userName = this.cookieService.get('userName');
        this.data.visaDocumentList.sort(function (a, b) {
          return new Date(b.createDate).getTime() - new Date(a.createDate).getTime();
        });
        let timeDiff = Math.abs(Date.now() - new Date(this.data.visaStage.visaEndDate).getTime());
        let remainDays = Math.floor(timeDiff / (1000 * 3600 * 24));
        this.needInform = remainDays <= 100;
        this.status = data.visaStage.status;
        this.pageComplete = true;
      }, (err) => {
        console.log(err);
      }
    )


  }

}
