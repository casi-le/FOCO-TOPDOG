import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastWinnersComponent } from './past-winners.component';

describe('PastWinnersComponent', () => {
  let component: PastWinnersComponent;
  let fixture: ComponentFixture<PastWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastWinnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
