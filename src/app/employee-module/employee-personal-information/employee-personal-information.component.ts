import { Component, OnInit } from '@angular/core';
import { personalInfo, personalDocument } from './employee-personal-information-model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeHttpService } from '../services/employee-http.service';
import { DialogService } from 'src/app/Service/dialog.service';
import { NgForm } from '@angular/forms';
import { UploadFileService } from 'src/app/Service/upload-file.service';

@Component({
  selector: 'app-employee-personal-information',
  templateUrl: './employee-personal-information.component.html',
  styleUrls: ['./employee-personal-information.component.css']
})
export class EmployeePersonalInformationComponent implements OnInit {
  info!: personalInfo;
  tempInfo!: personalInfo;
  ssn!: string;
  selectedAvatar: File;
  avatarBtn: string;
  
  edit = {
    editName: false,
    editAddress: false,
    editContact: false,
    editEmployee: false,
    editEmergency: false,
    editDocument: false,
  }
  constructor(private actRoute: ActivatedRoute,
    private http: HttpClient,
    private employeehttpService: EmployeeHttpService,
    private dialogService: DialogService,
    private uploadService: UploadFileService
  ) { }

  //for name section
  editName(): void{
    this.avatarBtn = "Upload avatar";
    this.tempInfo.nameSection = JSON.parse(JSON.stringify(this.info.nameSection));
    this.edit.editName = true;

  }
  saveName(): void {
    this.employeehttpService.update('name', this.tempInfo.nameSection).subscribe((result) => {
      console.log(result);
      this.info.nameSection = JSON.parse(JSON.stringify(this.tempInfo.nameSection));
      this.edit.editName = false;
      const timeDiff = Math.abs(Date.now() - new Date(this.info.nameSection.dob).getTime());
      this.info.nameSection.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      this.ssn = this.info.nameSection.ssn.toString().substring(5);
    }, (err) => {
      console.log(err);
    }
    )
  }
  cancelName(nameForm: NgForm): void {
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

  selectAvatar(event: any): void {
    this.selectedAvatar = event.target.files.item(0);
  }
  uploadAvatar(): void {
    this.uploadService.pushFileToStorage(this.selectedAvatar).subscribe(event => {
      //get the download url from backend
      this.tempInfo.nameSection.avatar = event;
      this.avatarBtn = "Done";
    }, err => {
      console.log(err.message);
    });
  }

  editAddress() {
    this.tempInfo.addressSection = JSON.parse(JSON.stringify(this.info.addressSection));
    this.edit.editAddress = true;
  }
  saveAddress() {
    this.employeehttpService.update('address', this.tempInfo.addressSection).subscribe((result) => {
      console.log(result);
      this.info.addressSection = JSON.parse(JSON.stringify(this.tempInfo.addressSection));
      this.edit.editAddress = false;
    }, (err) => {
      console.log(err);
    }
    )
  }
  cancelAddress(addressForm: NgForm) {
    if (addressForm.dirty) {
      this.dialogService.confirm("Are you sure to discard all your changes?").subscribe(
        (res) => {
          this.edit.editAddress = !res;
        }
      );
    } else {
      this.edit.editAddress = false;
    }
  }

  editContact() {
    this.tempInfo.contactSection = JSON.parse(JSON.stringify(this.info.contactSection));
    this.edit.editContact = true;
  }
  saveContact() {
    this.employeehttpService.update('contact', this.tempInfo.contactSection).subscribe((result) => {
      console.log(result);
      this.info.contactSection = JSON.parse(JSON.stringify(this.tempInfo.contactSection));
      this.edit.editContact = false;
    }, (err) => {
      console.log(err);
    }
    )
  }
  cancelContact(contactForm: NgForm) {
    if (contactForm.dirty) {
      this.dialogService.confirm("Are you sure to discard all your changes?").subscribe(
        (res) => {
          this.edit.editContact = !res;
        }
      );
    } else {
      this.edit.editContact = false;
    }
  }

  editEmployee() {
    this.tempInfo.employeeSection = JSON.parse(JSON.stringify(this.info.employeeSection));
    this.edit.editEmployee = true;
  }
  saveEmployee(employeeForm: NgForm) {
    if (this.tempInfo.employeeSection.visaType == "other" && employeeForm.form.value.otherVisaType != "") {
      this.tempInfo.employeeSection.visaType = employeeForm.form.value.otherVisaType;
    }
    this.employeehttpService.update('employee', this.tempInfo.employeeSection).subscribe((result) => {
      console.log(result);
      this.info.employeeSection = JSON.parse(JSON.stringify(this.tempInfo.employeeSection));
      this.edit.editEmployee = false;
    }, (err) => {
      console.log(err);
    }
    )
  }
  cancelEmployee(employeeForm: NgForm) {
    if (employeeForm.dirty) {
      this.dialogService.confirm("Are you sure to discard all your changes?").subscribe(
        (res) => {
          this.edit.editEmployee = !res;
        }
      );
    } else {
      this.edit.editEmployee = false;
    }
  }

  editEmergencyContact() {
    this.tempInfo.emergencyContactList = JSON.parse(JSON.stringify(this.info.emergencyContactList));
    this.edit.editEmergency = true;
  }
  saveEmergencyContact() {
    this.employeehttpService.update('emergency', this.tempInfo.emergencyContactList).subscribe((result) => {
      console.log(result);
      this.info.emergencyContactList = JSON.parse(JSON.stringify(this.tempInfo.emergencyContactList));
      this.edit.editEmergency = false;
    }, (err) => {
      console.log(err);
    }
    )

  }
  cancelEmergencyContact(emergencyForm: NgForm) {
    if (emergencyForm.dirty) {
      this.dialogService.confirm("Are you sure to discard all your changes?").subscribe(
        (res) => {
          this.edit.editEmergency = !res;
        }
      );
    } else {
      this.edit.editEmergency = false;
    }
  }

  editDocument() {
    this.tempInfo.personalDocumentList = JSON.parse(JSON.stringify(this.info.personalDocumentList));
    this.edit.editDocument = true;
  }
  saveDocument() {
    this.employeehttpService.update('document', this.tempInfo.personalDocumentList).subscribe((result) => {
      console.log(result);
      this.info.personalDocumentList = JSON.parse(JSON.stringify(this.tempInfo.personalDocumentList));
      this.edit.editDocument = false;
    }, (err) => {
      console.log(err);
    }
    )
  }
  cancelDocument(documentForm: NgForm) {
    if (documentForm.dirty) {
      this.dialogService.confirm("Are you sure to discard all your changes?").subscribe(
        (res) => {
          this.edit.editDocument = !res;
        }
      );
    } else {
      this.edit.editDocument = false;
    }
  }

  uploadDocument(event: any, id: number) {

    const doc = event.target.files.item(0);
    this.uploadService.pushFileToStorage(doc).subscribe(event => {
      //get the download url from backend
      this.tempInfo.personalDocumentList[id].path = event;
      //this.tempInfo.personalDocumentList[id].createDate = new Date(Date.now());
      document.getElementById("uploadRes" + id).innerHTML = "Done";
    }, err => {
      console.log(err.message);
    });
  }


  filePreview(doc: personalDocument) {
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
    const timeDiff = Math.abs(Date.now() - new Date(this.info.nameSection.dob).getTime());
    this.info.nameSection.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    this.ssn = this.info.nameSection.ssn.toString().substring(5);

    this.info.personalDocumentList.sort(function (a, b) {
      return new Date(b.createDate).getTime() - new Date(a.createDate).getTime();
    });
    
  }
}
