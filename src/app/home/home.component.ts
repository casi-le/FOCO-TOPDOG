import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { faThumbsUp as faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { faPaw as faPaw} from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileWink as faFaceSmileWink} from '@fortawesome/free-solid-svg-icons';

import { ImageModule } from "primeng/image"; 
import * as myGlobals from '../globals'; //<==== this one (**Updated**)
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, CarouselModule, ButtonModule, TagModule, ImageModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faThumbsUp, faPaw, faFaceSmileWink);
  }
  public ftdDate=myGlobals.ftdDate;
  public ftdLink = myGlobals.ftdLink;
  photos:any;
responsiveOptions:any;
  ngOnInit(){
    this.photos=[
      
      {
        id:'../assets/images/wash_label.png'
      },
      {
        id:'../assets/images/knox_label.png'
      },
      {
        id:'../assets/images/Blue 2023 Label.png'
      },
     
     
      {
        id:'../assets/images/wash_beercan.png'
      },
      {
        id:'../assets/images/knox_beercan.png'
      },
      {
        id:'../assets/images/knox_beercan.png'
      },
    ]
    this.responsiveOptions = [

      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    
  }
 
}
