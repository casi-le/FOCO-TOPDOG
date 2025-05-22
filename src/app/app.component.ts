import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foco-topdog';
  constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            if (typeof window !== "undefined") {
              window.scrollTo(0, 0) // for example

           }
        });
    }
}
