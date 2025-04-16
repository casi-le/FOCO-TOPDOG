import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faInstagram as faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faInstagram = faInstagram;

}
