
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: '', component: HomeComponent}
];