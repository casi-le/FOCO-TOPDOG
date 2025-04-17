import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelCarouselComponent } from './label-carousel.component';

describe('LabelCarouselComponent', () => {
  let component: LabelCarouselComponent;
  let fixture: ComponentFixture<LabelCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
