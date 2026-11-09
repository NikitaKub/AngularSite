import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePromoSector } from './home-promo-sector';

describe('HomePromoSector', () => {
  let component: HomePromoSector;
  let fixture: ComponentFixture<HomePromoSector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePromoSector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePromoSector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
