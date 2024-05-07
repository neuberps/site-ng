import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { CartService } from './services/cart.service';
import { CommonModule, CurrencyPipe, NgFor, NgIf, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { Cart } from './model/cart';
import { Product } from '../product/model/product';
import { OrderService } from '../order/service/order.service';

registerLocaleData(localePt);

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterLink, CommonModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    CurrencyPipe,
  ],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.css',
})
export class ShoppingCardComponent {

  cart: Cart = this.cartService.getCartSession();
  cupom: string = '';

  novoTotal: number = this.valorTotal;

  cupomAplicado: boolean = false;

  constructor(
    private cartService: CartService,
    private currencyPipe: CurrencyPipe,
    private OrderService: OrderService
  ) {}

  onclickAdd(product: any) {
    let cartProduct = this.cart.products.find(p => p.id === product.id);

    if (cartProduct) {
      let totalCart = cartProduct.price * cartProduct.quantity;

      cartProduct.quantity++;

      this.cartService.addToCart(cartProduct)

    } else {

      this.cart.products.push(product);

      this.cartService.addToCart(cartProduct)

      let totalCart = product.price * product.quantity;

    }
  }

  onclickSub(product: any) {
    let cartProduct = this.cart.products.find((p) => p.id === product.id);

    if (cartProduct && cartProduct.quantity > 1  ) {
      cartProduct.quantity--;

      let totalCart = cartProduct.price * cartProduct.quantity;

      this.cartService.removeToCart(cartProduct)

    } else if (cartProduct && cartProduct.quantity == 1) {

      this.cart.products.pop();

      this.cartService.removeItemKey(cartProduct.id)

    }
  }

  aplicarDesc(cupom: string) {
    this.novoTotal = this.valorTotal;
    if(cupom === "desc"){
      this.novoTotal *= 0.9;
      this.cupomAplicado = true;
    }
}


  get valorTotal() {
    let total = 0;

    for (let product of this.cart.products) {
      total += product.price * product.quantity;
    }
    return total;
  }

  get totalCDesc() {
    return this.cupom === 'desc' ? this.novoTotal : this.valorTotal;
  }



totalProd(product : Product){
  let totalproduto = product.quantity * product.price;
  return totalproduto;
}

removeCart(){
  this.cartService.removeCart();
}

  ngOnInit() {

 }

  createOrder() {


  }
}
