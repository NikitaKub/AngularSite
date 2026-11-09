import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundAbout } from './refund-about';

describe('RefundAbout', () => {
  let component: RefundAbout;
  let fixture: ComponentFixture<RefundAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
