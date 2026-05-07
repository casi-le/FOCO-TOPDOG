import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-past-winner',
  imports: [],
  templateUrl: './past-winner.component.html',
  styleUrl: './past-winner.component.css',
})
export class PastWinnerComponent {
@Input() pastwinnerInfo:any;
}
