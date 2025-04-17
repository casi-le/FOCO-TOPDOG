import { Component, Input } from '@angular/core';
import { EventCarouselComponent } from '../event-carousel/event-carousel.component';
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
  imports: [FontAwesomeModule, EventCarouselComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  @Input() eventInfo={'icon':'','title':'','details': '', 'photos':''};
 icon:any;
 type='';
 ngOnInit(){
  // console.log(this.eventInfo)
  if(this.eventInfo.icon=='faDog'){
    this.icon=faDog;
    this.type='mutt';
  }else if(this.eventInfo.icon=='faPoo'){
    this.icon=faPoo;
    this.type='poo';
  }else if(this.eventInfo.icon=='faYinYang'){
    this.icon=faYinYang;
    this.type='saint';
  }else if(this.eventInfo.icon=='faQuestion'){
    this.icon=faQuestion;
    this.type='q';
  }else if(this.eventInfo.icon=='faPaw'){
    this.icon=faPaw;
    this.type='under';
  }else if(this.eventInfo.icon=='faTrophy'){
    this.icon=faTrophy;
    this.type='story';
  }
 }
 
}
