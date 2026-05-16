import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePromoSlider } from './home-promo-slider';

describe('HomePromoSlider', () => {
  let component: HomePromoSlider;
  let fixture: ComponentFixture<HomePromoSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePromoSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePromoSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
