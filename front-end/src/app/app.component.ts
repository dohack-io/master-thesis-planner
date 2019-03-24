import {Component, OnInit} from '@angular/core';
import { Question } from '../shared/Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // tslint:disable
  angezeigt: boolean = false;

  constructor() {}

  onClick() {
    this.angezeigt = true;
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
}
