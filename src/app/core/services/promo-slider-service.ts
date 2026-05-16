import { Injectable } from '@angular/core';
import { PromoSlideModel } from '../models/promo-slide-model';

@Injectable({
  providedIn: 'root',
})
export class PromoSliderService {
  protected promoSlidesList: PromoSlideModel[] = [{
      "id":0,
      "path":"/slider_promo_content/blank-accessories.png",
      "alt": "Blank 1"
    },
    {
      "id":1,
      "path":"/slider_promo_content/blank-accessories1.png",
      "alt": "Blank 2"
    },
    {
      "id":2,
      "path":"/slider_promo_content/blank-accessories2.png",
      "alt": "Blank 3"
    }];
  constructor() {};

  getAllPromoPhotos(): PromoSlideModel[] {
    return this.promoSlidesList;
  }
}
