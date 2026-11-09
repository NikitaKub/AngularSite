import { Component, Input, input } from '@angular/core';
import { ProductModel } from '../../../core/models/product-model';

@Component({
  selector: 'app-home-products-showcase',
  imports: [],
  templateUrl: './home-products-showcase.html',
  styleUrl: './home-products-showcase.css',
})
export class HomeProductsShowcase {
  @Input() header:string = "";
  @Input() productsList:ProductModel[] = [];
}
