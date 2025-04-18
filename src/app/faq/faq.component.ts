import { Component } from '@angular/core';
import * as myGlobals from '../globals'; //<==== this one (**Updated**)

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  public ftdDate=myGlobals.ftdDate;
  public ftdLink = myGlobals.ftdLink;
  public ftdYear= myGlobals.ftdYear;
}
