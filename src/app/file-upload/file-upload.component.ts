import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../Service/upload-file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFiles!: FileList;
  currentFileUpload!: File;
  file!: string;
  downloadUrl: string;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  }

  viewFile() {
    window.open(this.downloadUrl);
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      //get the download url from backend
      this.downloadUrl = event;
      this.file = this.currentFileUpload.name;
    }, err => {
      console.log(err.message);
    });
  }
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }
}
