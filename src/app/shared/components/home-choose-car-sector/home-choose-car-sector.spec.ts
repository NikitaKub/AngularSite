import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChooseCarSector } from './home-choose-car-sector';

describe('HomeChooseCarSector', () => {
  let component: HomeChooseCarSector;
  let fixture: ComponentFixture<HomeChooseCarSector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeChooseCarSector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChooseCarSector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
