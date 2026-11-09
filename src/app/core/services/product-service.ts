import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  protected productsList: ProductModel[] = [{
        id:0,
        name:"Гальмівні колодки передні вентильовані",
        code:"24.0128-0160",
        brand:"BREMBO",
        details:"Про щось 1",
        price:100,
        stock:true
      },
      {
        id:1,
        name:"Гальмівні колодки задні вентильовані",
        code:"25.0239-0270",
        brand:"BREMBO",
        details:"Про щось 2",
        price:150,
        stock:true
      },
      {
        id:2,
        name:"Ремінь ГРМ",
        code:"26.0340-0380",
        brand:"BREMBO",
        details:"Про щось 3",
        price:200,
        stock:false
      },
      {
        id:3,
        name:"Масло",
        code:"27.0450-0490",
        brand:"BREMBO",
        details:"Про щось 4",
        price:250,
        stock:true
      },
      {
        id:4,
        name:"Свічі зажигання",
        code:"28.0560-0500",
        brand:"INA-FOR",
        details:"Про щось 5",
        price:300,
        stock:false
      },
    ];
    constructor() {};
  
    getAllProducts(): ProductModel[] {
      return this.productsList;
    }
}
