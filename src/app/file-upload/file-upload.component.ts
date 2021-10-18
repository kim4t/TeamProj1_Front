import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UploadFileService } from '../Service/upload-file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFile!: File;

  @Output()
  selectedFileEvt = new EventEmitter<File>();
  file!: string;
  downloadUrl: string;
  currentFileUpload!: File;

  selectedFiles!: FileList;
  
  // file!: string;
  // downloadUrl: string;
  // selectedFileEvt = new EventEmitter<File>();
  

  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  }

  viewFile() {
    window.open(this.downloadUrl);
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload)
    .subscribe(event => {
      //get the download url from backend
      this.downloadUrl = event;
      this.file = this.currentFileUpload.name;
    }, err => {
      console.log(err.message);
    });
  }
  
  selectFile(event: any) {
    this.selectedFile = event.target.files.item(0);
    this.selectedFileEvt.emit(this.selectedFile);
  }
}
