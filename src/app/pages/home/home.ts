import { Component, inject } from '@angular/core';
import { HomeMarksSector } from '../../shared/components/home-marks-sector/home-marks-sector';
import { HomeAutopartsMarksSector } from '../../shared/components/home-autoparts-marks-sector/home-autoparts-marks-sector';
import { HomeAboutSector } from '../../shared/components/home-about-sector/home-about-sector';
import { HomeChooseCarSector } from '../../shared/components/home-choose-car-sector/home-choose-car-sector';
import { HomePromoSector } from '../../shared/components/home-promo-sector/home-promo-sector';
import { HomeProductsShowcase } from '../../shared/components/home-products-showcase/home-products-showcase';
import { ProductModel } from '../../core/models/product-model';
import { ProductService } from '../../core/services/product-service';


@Component({
  selector: 'app-home',
  imports: [HomeMarksSector, HomeAutopartsMarksSector, HomeAboutSector, HomeChooseCarSector, HomePromoSector, HomeProductsShowcase],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  productsList:ProductModel[] = [];
  productsService:ProductService = inject(ProductService);

  constructor(){
    this.productsList = this.productsService.getAllProducts();
  }
}
