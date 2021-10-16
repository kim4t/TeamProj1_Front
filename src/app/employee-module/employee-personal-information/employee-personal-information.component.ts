import { Component, OnInit } from '@angular/core';
import { personalInfo } from './employee-personal-information-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-personal-information',
  templateUrl: './employee-personal-information.component.html',
  styleUrls: ['./employee-personal-information.component.css']
})
export class EmployeePersonalInformationComponent implements OnInit {
  info: personalInfo;


  constructor(private actRoute: ActivatedRoute) { }

  filePreview(doc) {
    window.open(doc.path, "_blank");
    console.log(doc);
  }
  myWindow() { window.open("", "", "width=200,height=100"); }

  ngOnInit(): void {
    this.actRoute.data.subscribe(
      (data) => {
        console.log(data.empResolver);
        this.info = data.empResolver;
      }
    );
    let timeDiff = Math.abs(Date.now() - new Date(this.info.nameSection.dob).getTime());
    this.info.nameSection.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

    this.info.personalDocumentList.sort(function (a, b) {
      return new Date(b.createDate).getTime() - new Date(a.createDate).getTime();
    });
  }

}
