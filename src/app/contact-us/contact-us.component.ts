
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor(private emailService: EmailService) {}
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',  Validators.email)
  })
  onSubmit(){
    var email:string = this.profileForm.get('email')?.value!;
    var name:string = this.profileForm.get('name')?.value!;

    window.open('mailto:focotopdog@gmail.com?cc='+email+'?subject=FOCO Top Dog Contact by '+name);
    // this.emailService.sendEmail(name, email, '').subscribe(
    //   response => {
    //     console.log('Email sent successfully!');
    //   },
    //   error => {
    //     console.log('Error sending email:', error);
    //   }
    // );

  }
}
