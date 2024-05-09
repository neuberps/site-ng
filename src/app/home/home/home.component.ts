import { Component } from '@angular/core';
import { Product } from '../../pages/product/model/product';
import { Cart } from '../../pages/shopping-card/model/cart';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../pages/shopping-card/services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  products: Product[] = [];
  cart: Cart = new Cart;


  constructor(
    public route: ActivatedRoute,
    private cartService: CartService) {}

  onclickAdd(product: any) {
    let cartProduct = this.cart.products.find(p => p.id === product.id);

       if (cartProduct) {
         cartProduct.quantity++;
         this.cart.totalCart = cartProduct.price * cartProduct.quantity;

       } else {
         product.total = product.price;
         this.cart.products.push(product);

       }
     }


     onclickSub(product: any) {
       let cartProduct = this.cart.products.find(p => p.id === product.id);

       if (cartProduct && cartProduct.quantity > 1  ) {
         cartProduct.quantity-- ;
         this.cart.totalCart = cartProduct.price * cartProduct.quantity;

       } else if (cartProduct && cartProduct.quantity == 1) {
         this.cart.products = this.cart.products.filter(p => p.id !== product.id);
         cartProduct.quantity-- ;

       }
     }


addToCart(product: any) {
  this.cartService.addToCart(product);
}

}
