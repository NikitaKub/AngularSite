import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsShowcase } from './home-products-showcase';

describe('HomeProductsShowcase', () => {
  let component: HomeProductsShowcase;
  let fixture: ComponentFixture<HomeProductsShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProductsShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProductsShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
