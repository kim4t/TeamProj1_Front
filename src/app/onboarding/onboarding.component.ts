import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'; import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {emergencyContact} from '../model/emergencyContact.model';
import {onboarding} from '../model/onboarding.model';
import {referencePerson} from '../model/referencePerson.model';
import {FileType} from '../enum/fileType.enum';
import {UploadFileService} from 'src/app/Service/upload-file.service';
import {personalInfo} from '../employee-module/employee-personal-information/employee-personal-information-model';

enum IsVisa { YES, NO, NONE }
enum UserVisaType { Citizen = 'Citizen', GreenCard = 'Green Card', NONE = 'NONE' }

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],
})
export class OnboardingComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient, private uploadService: UploadFileService) { }

  emergencyContact: emergencyContact[] = [];
  avartarFileType = FileType.Avatar;
  visaFileType = FileType.Visa;
  driverLicenseFileType = FileType.DriverLicense;
  referencePerson = new referencePerson();
  isDisabled = false;
  RefNumber = 0;
  currentVisaType: IsVisa = IsVisa.NONE;
  currentUserVisa: UserVisaType = UserVisaType.NONE;
  isVisaEnum = IsVisa;
  isUserVisaEnum = UserVisaType;
  visaType = '';
  email = '';
  checkVisaType = '';
  selected = -1;
  checkDriverLicense = '';
  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  gender = '';

  avatar = '';
  visaDocumentPath = '';
  driverLicenseDocumentPath = '';

  avatarBtn: string;
  tempInfo!: personalInfo;
  selectedAvatar: File;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // Query Param used to receive the email and token
      console.log(params);
      this.email = params.email;
    });
  }

  onSubmit(form: NgForm): void {
    const onboardingInfo: onboarding = form.value;

    onboardingInfo.email = this.email;
    onboardingInfo.visaType = this.visaType;
    onboardingInfo.avatar = this.avatar;
    onboardingInfo.visaDocumentPath = this.visaDocumentPath;
    onboardingInfo.driverLicenseDocumentPath = this.driverLicenseDocumentPath;
    onboardingInfo.emergencyContact = this.emergencyContact;


    /*  Send file to backend as JSON data type */
    // this.http.post('http://localhost:8081/employee/onboard ', onboardingInfo)
    this.http.post('http://localhost:8081/employee/onboard ', onboardingInfo, {responseType: "text"})
        .subscribe((result) => {
          console.log(result);
        });
  }

  URL = 'https://teamproj1bucket.s3.us-east-2.amazonaws.com';

  setFile(file: File, fileType: FileType): void {
    if (fileType == FileType.Avatar) {
      // this.form_data.append('avatar', file, file.name);
      // Just need to get the url from file-upload Service
      // this.form_data.append('avatar', this.URL + '/' + file.name);
      this.avatar = this.URL + '/' + file.name;
    } else if (fileType == FileType.DriverLicense) {
      // this.form_data.delete('driverLicense');
      // this.form_data.append('driverLicense', this.URL + '/' + file.name);
      this.visaDocumentPath = this.URL + '/' + file.name;
    } else if (fileType == FileType.Visa) {
      // this.form_data.delete('visa');
      // this.form_data.append('visa', this.URL + '/' + file.name);
      this.driverLicenseDocumentPath = this.URL + '/' + file.name;
    }
  }

  addEmergencyContact(): void {
    // create new object of emergencyContact
    const e: emergencyContact = {
      firstName: '',
      lastName: '',
      middleName: '',
      cellphone: '',
      email: '',
      relationship: '',
      index: 0,
    };

    e.index = this.emergencyContact.length;
    this.emergencyContact.push(e);
  }

  addReferencePerson(): void {
    // create new object of referencePerson
    this.referencePerson = {
      firstNameRef: '',
      lastNameRef: '',
      middleNameRef: '',
      cellphoneRef: '',
      emailRef: '',
      relationshipRef: '',
      addressLine1Ref: '',
      addressLine2Ref: '',
      cityRef: '',
      stateAbbrRef: '',
      stateNameRef: '',
      zipCodeRef: '',
      index: 0,
    };

    this.isDisabled = true;
  }

  selectCheckBoxForIsCitizen(visaType: IsVisa): void {
    if (this.currentVisaType == visaType) {
      this.currentVisaType = this.isVisaEnum.NONE;
      return;
    }

    this.currentVisaType = visaType;
  }

  selectCheckBoxForVisaType(visaType: UserVisaType): void{
    if (this.currentUserVisa == visaType) {
      this.currentUserVisa = this.isUserVisaEnum.NONE;

      return;
    }

    this.currentUserVisa = visaType;
    this.visaType = visaType.toString();
  }

  minusEmergencyContact(): void {
    // this.emergencyContact.pop(e);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
