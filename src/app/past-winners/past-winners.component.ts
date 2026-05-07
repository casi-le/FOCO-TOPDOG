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
    {'name':'Washburne', 'year': '2021'},
    {'name': 'Knox', 'year': '2022'},
    {'name':'Blue', 'year':'2023'},
    {'name':'Zirkel', 'year':'2024'},
    {'name':'Rocco', 'year':'2025'}
  ];

}
