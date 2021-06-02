import { Product } from './../models/product';

import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.readCartItemState();
  }

  readCartItemState(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product)
  }

}
