
import { CartItem } from './../models/cartItem';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems : CartItem[]
  constructor() { 
    this.cartItems = []
  }

  addToCart(product:Product):void{
    let item = this.cartItems.find(c=>c.product.id === product.id)
    if(item){
      item.quantity++;
    }else{
      this.cartItems.push({quantity:1, product:product})
    }
  }

  removeFromCart(product:Product):void{
    let item = this.cartItems.find(c=>c.product.id === product.id)
    if(item){
      if(item.quantity>1){
        item.quantity--;
      }else{
        this.cartItems.splice(this.cartItems.indexOf(item),1)
      }
    }
  }

  list():CartItem[]{
    return this.cartItems;
  }
}
