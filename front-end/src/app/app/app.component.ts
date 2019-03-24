import { Component, OnInit, Output} from '@angular/core';
import { Question } from '../shared/Question';
import { FileUploader } from 'ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';
import {AppService} from './app.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // tslint:disable
  private url;
  fileToUpload: File = null;
  private error;
  response ;
  isloader = false;
  text: string;
  angezeigt: boolean = false;
  survey: boolean = true;
  uploaderForParent: FileUploader = new FileUploader({ url: 'any' });
  constructor(private domSanitizer: DomSanitizer, private appService: AppService, private spinner: NgxSpinnerService) {
  }

  sanitize(url:string){
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  getFileForParent() {
    console.log("Parent");
    console.log(this.uploaderForParent);


    if (this.uploaderForParent.queue[0].file.type != 'application/PDF') {
      alert("Please select pdf files only");
      return;
    }
    //this.uploaderForParent.uploadAll();
  }
  onClick() {
    this.angezeigt = true;
  }

  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity()
  }

  uploadFileToActivity() {
    this.isloader=true;
    this.spinner.show();
    this.appService.postFile(this.fileToUpload).subscribe(result => {
      this.response = result;
      console.log('s ',this.response.username);
      this.text = this.response.username;
      this.isloader = false;
      this.spinner.hide();
    });
  }

  fragenSet: Question[] = [
      {"question": "What is the article about?",
        "option1": {"title": "Learning Analytics", "correct": true},
        "option2": {"title": "Visual Analytics", "correct": false},
        "option3": {"title": "Data Mining", "correct": false},
        "option4": {"title": "Artifical Intelligence", "correct": false}
        },
      {"question": "What is Learning Analytics?",
        "option1": {"title": "Learning Science", "correct": true},
        "option2": {"title": "Learning Analytics", "correct": false},
        "option3": {"title": "Learning Analytics", "correct": false},
        "option4": {"title": "Learning Analytics", "correct": false}
      },
      {"question": "What is the article about?",
        "option1": {"title": "Learning Analytics", "correct": true},
        "option2": {"title": "Visual Analytics", "correct": false},
        "option3": {"title": "Data Mining", "correct": false},
        "option4": {"title": "Artifical Intelligence", "correct": false}
      },
      {"question": "What is Learning Analytics?",
        "option1": {"title": "Learning Science", "correct": true},
        "option2": {"title": "Learning Analytics", "correct": false},
        "option3": {"title": "Learning Analytics", "correct": false},
        "option4": {"title": "Learning Analytics", "correct": false}
      }
    ]

  onReadyBtn() {
    this.survey = false;
  }
}
