import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastWinnerComponent } from './past-winner.component';

describe('PastWinnerComponent', () => {
  let component: PastWinnerComponent;
  let fixture: ComponentFixture<PastWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastWinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
