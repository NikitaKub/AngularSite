import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPaymentAbout } from './delivery-payment-about';

describe('DeliveryPaymentAbout', () => {
  let component: DeliveryPaymentAbout;
  let fixture: ComponentFixture<DeliveryPaymentAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryPaymentAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPaymentAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
