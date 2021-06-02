import { CartService } from './../services/cart.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit {
  products:Product[]=[]
  constructor(private productService:ProductService, private cartService:CartService) { }

  ngOnInit(): void {
   this.products = this.productService.getProducts();
  }

  addToCart(product:Product){
    this.cartService.addToCart(product)
  }

}
