import {Component, Input, OnInit} from '@angular/core';
import { Question } from '../../shared/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  //tslint:disable
  @Input() question: Question;

  choosen: boolean = false;
  constructor() { }

  checkRadio(num: number){
    console.log(num)
    this.disableOthers()
  }
  ngOnInit() {
  }

  disableOthers(){

    this.choosen = true;
  }

}
