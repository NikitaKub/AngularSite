import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutopartsMarksSector } from './home-autoparts-marks-sector';

describe('HomeAutopartsMarksSector', () => {
  let component: HomeAutopartsMarksSector;
  let fixture: ComponentFixture<HomeAutopartsMarksSector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAutopartsMarksSector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAutopartsMarksSector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
