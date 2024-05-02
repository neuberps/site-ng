import { Product } from './../../product/model/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Array<Product>>([]);

  private contador = new BehaviorSubject<number>(this.cart.getValue.length);

  cartObj = this.cart.getValue();


  currentCart = this.cart.asObservable();

  currentCount = this.contador.asObservable();


  constructor() { }

  addToCart(product: any) {

  let existingProduct = this.cartObj.find(p => p.id === product.id);

    if (existingProduct) {
    existingProduct.quantity += 1

    } else {

      this.cartObj.push(product);
    }

    this.cart.next(this.cartObj);
  }

  incrementarContador() {
    let count = this.contador.getValue();
    this.contador.next(count + 1);
  }

  decrementarContador() {
    let count = this.contador.getValue();
    if(count >= 1 ){
    this.contador.next(count - 1);
    }
  }

  remove(){
    this.cartObj.pop();
  }


}
