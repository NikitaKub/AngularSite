import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutSector } from './home-about-sector';

describe('HomeAboutSector', () => {
  let component: HomeAboutSector;
  let fixture: ComponentFixture<HomeAboutSector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutSector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAboutSector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
