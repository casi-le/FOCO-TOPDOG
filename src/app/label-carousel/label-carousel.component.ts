import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-label-carousel',
  imports: [CommonModule],
  templateUrl: './label-carousel.component.html',
  styleUrl: './label-carousel.component.css'
})
export class LabelCarouselComponent {
  photoList = [''];
  ngOnInit(){
    this.photoList=[
      'blue_logo.png',
      'knox_label.png',
      'wash_label.png',
      'blue_logo.png'
      ]
  }
}
