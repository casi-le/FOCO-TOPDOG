import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import { faThumbsUp as faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { faPaw as faPaw} from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileWink as faFaceSmileWink} from '@fortawesome/free-solid-svg-icons';


import * as myGlobals from '../globals'; //<==== this one (**Updated**)
@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
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
}
