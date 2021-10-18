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
    //console.log(this.newVisaStage);
    //console.log(this.selectedFile);
    let id = this.getStage(this.newOPTStep);
    //upload file
    this.uploadFile(id - 1);
    //set to new type
    this.data.visaStage.type = this.newOPTStep;

    this.http.post('http://localhost:8081/employee/visa/newStep', this.data.visaStage, { responseType: 'json', withCredentials: true }).subscribe((result) => {
      console.log(result);
      this.stage = this.getStage(this.data.visaStage.type);
    }, (err) => {
      console.log(err);
    }
    )



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
      default:
        res = 0;
    }
    return res;
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
      newTitile = this.userName + '_' + newTitile;
      console.log("newTitle: " + newTitile)
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
        this.stage = this.getStage(data.visaStage.type);
        /*
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
        
        */
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
