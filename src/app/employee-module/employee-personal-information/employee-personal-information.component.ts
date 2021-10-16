import { Component, OnInit } from '@angular/core';
import { personalInfo } from './employee-personal-information-model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeHttpService } from '../services/employee-http.service';
import { DialogService } from 'src/app/Service/dialog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-personal-information',
  templateUrl: './employee-personal-information.component.html',
  styleUrls: ['./employee-personal-information.component.css']
})
export class EmployeePersonalInformationComponent implements OnInit {
  info: personalInfo;
  tempInfo: personalInfo;
  ssn: string;
  edit = {
    editName: false,
  }
  constructor(private actRoute: ActivatedRoute,
    private http: HttpClient,
    private employeehttpService: EmployeeHttpService,
    private dialogService: DialogService,
  ) { }

  //for name section
  editName(nameForm) {
    this.tempInfo.nameSection = JSON.parse(JSON.stringify(this.info.nameSection));
    this.edit.editName = true;

  }
  saveName(nameForm) {
    this.employeehttpService.update('name', this.tempInfo.nameSection).subscribe((result) => {
      console.log(result);
      this.info.nameSection = JSON.parse(JSON.stringify(this.tempInfo.nameSection));
      this.edit.editName = false;
    }, (err) => {
      console.log(err);
    }
    )
  }
  cancelName(nameForm) {
    if (nameForm.dirty) {
      //use dialog check whether discard changes
      this.dialogService.confirm("Are you sure to discard all your changes?").subscribe(
        (res) => {
          this.edit.editName = !res;
        }
      );
    } else {
      this.edit.editName = false;
    }
  }


  filePreview(doc) {
    window.open(doc.path, "_blank");
    console.log(doc);
  }

  ngOnInit(): void {
    this.actRoute.data.subscribe(
      (data) => {
        console.log(data.empResolver);
        this.info = data.empResolver;
        this.tempInfo = JSON.parse(JSON.stringify(data.empResolver));
      }
    );
    let timeDiff = Math.abs(Date.now() - new Date(this.info.nameSection.dob).getTime());
    this.info.nameSection.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    this.ssn = this.info.nameSection.ssn.substring(5);

    this.info.personalDocumentList.sort(function (a, b) {
      return new Date(b.createDate).getTime() - new Date(a.createDate).getTime();
    });
  }

}
