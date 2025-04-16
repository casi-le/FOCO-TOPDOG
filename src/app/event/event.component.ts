import { Component, Input } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faDog as faDog} from '@fortawesome/free-solid-svg-icons';
import {faPoo as faPoo} from '@fortawesome/free-solid-svg-icons';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
FontAwesomeModule
@Component({
  selector: 'app-event',
  imports: [FontAwesomeModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  @Input() eventInfo={'icon':'','title':'','details': '', 'photos':''};
 icon:any;
 ngOnInit(){
  console.log(this.eventInfo)
  if(this.eventInfo.icon=='faDog'){
    this.icon=faDog;
  }else if(this.eventInfo.icon=='faPoo'){
    this.icon=faPoo;
  }else if(this.eventInfo.icon=='faYinYang'){
    this.icon=faYinYang;
  }else if(this.eventInfo.icon=='faQuestion'){
    this.icon=faQuestion;
  }else if(this.eventInfo.icon=='faPaw'){
    this.icon=faPaw;
  }else if(this.eventInfo.icon=='faTrophy'){
    this.icon=faTrophy;
  }
 }
 
}
