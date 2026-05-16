import { TestBed } from '@angular/core/testing';

import { PromoSliderService } from './promo-slider-service';

describe('PromoSliderService', () => {
  let service: PromoSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
