import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarksSector } from './home-marks-sector';

describe('HomeMarksSector', () => {
  let component: HomeMarksSector;
  let fixture: ComponentFixture<HomeMarksSector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMarksSector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMarksSector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
