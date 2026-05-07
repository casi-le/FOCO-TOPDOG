import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorHowtoComponent } from './sponsor-howto.component';

describe('SponsorHowtoComponent', () => {
  let component: SponsorHowtoComponent;
  let fixture: ComponentFixture<SponsorHowtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorHowtoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorHowtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
