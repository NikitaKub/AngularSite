import { Component, Inject, inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { PromoSlideModel } from '../../../core/models/promo-slide-model';
import { PromoSliderService } from '../../../core/services/promo-slider-service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-promo-slider',
  imports: [CommonModule],
  templateUrl: './home-promo-slider.html',
  styleUrl: './home-promo-slider.css',
})
export class HomePromoSlider implements OnInit, OnDestroy {
  promoSlidesList:PromoSlideModel[] = [];
  promoSliderService:PromoSliderService = inject(PromoSliderService);

  currentIndex: number = 0;

  private intervalId: any;

  constructor(/*@Inject(PLATFORM_ID*/) /*private platformId: any)*/{
    this.promoSlidesList = this.promoSliderService.getAllPromoPhotos();
  }

  ngOnInit(): void {
    // this.startAutoPlay();
  }

  ngOnDestroy(): void {
    // this.stopAutoPlay();
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.promoSlidesList.length;
    // this.resetTimer();
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.promoSlidesList.length) % this.promoSlidesList.length;
    // this.resetTimer();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  // private startAutoPlay(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.intervalId = setInterval(() => {
  //       this.next();
  //     }, 5000);
  //   }
  // }

  // private stopAutoPlay(): void {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

  // private resetTimer(): void {
  //   this.stopAutoPlay();
  //   this.startAutoPlay();
  // }
}
