import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { products } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():Product[]{
      return products;
  }
}


//Decorator
//new ProductService();
//reflect.api
//aspect oriented programming (AOP)(Interceptor)