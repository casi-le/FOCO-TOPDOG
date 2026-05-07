import { Component } from '@angular/core';
import { PastWinnerComponent } from '../past-winner/past-winner.component';

@Component({
  selector: 'app-past-winners',
  imports: [PastWinnerComponent],
  templateUrl: './past-winners.component.html',
  styleUrl: './past-winners.component.css',
})
export class PastWinnersComponent {
  pastwinnersInfo=[
    {'name':'Washburne', 'year': '2021', 'label':'Washburne Label.png', 'photo':'washburne_photo.jpg'},
    {'name': 'Knox', 'year': '2022', 'label':'Knox-Top-Dog-Label.png', 'photo':'knox_photo.jpg'},
    {'name':'Blue', 'year':'2023', 'label':'Blue 2023 Label.png', 'photo':''},
    {'name':'Zirkel', 'year':'2024', 'label':'2024 Zirkel.jpg', 'photo':''},
    {'name':'Rocco', 'year':'2025', 'label':'2025 Rocco.jpg', 'photo':''}
  ];

}
