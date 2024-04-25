import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { CartService } from './services/cart.service';
import { CommonModule, CurrencyPipe, NgFor, NgIf, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { Product } from '../product/model/product';

registerLocaleData(localePt)

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [NgFor, NgIf , FormsModule, RouterLink , CommonModule],
  providers: [
      { provide: LOCALE_ID, useValue: 'pt' },
      { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
      CurrencyPipe
    ],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.css'
})
export class ShoppingCardComponent {

  cart: Array<any> = [];
  cupom :string ='';
  novoTotal :number =  this.valorTotal;
  cupomAplicado : boolean = false;

  constructor(private cartService: CartService , private currencyPipe: CurrencyPipe ) { }

  onclickAdd(product: any) {
    let cartProduct = this.cart.find(p => p.id === product.id);

    if (cartProduct) {
      cartProduct.quantity++;
      cartProduct.total = cartProduct.price * cartProduct.quantity;
       this.cartService.incrementarContador()
    } else {
      product.total = product.price;
      this.cart.push(product);
    }
  }


  onclickSub(product: any) {
    let cartProduct = this.cart.find(p => p.id === product.id);

    if (cartProduct && cartProduct.quantity > 1  ) {
      cartProduct.quantity-- ;
      cartProduct.total = cartProduct.price * cartProduct.quantity;
      this.cartService.decrementarContador()

    } else if (cartProduct && cartProduct.quantity == 1) {
      this.cart = this.cart.filter(p => p.id !== product.id);
      this.cartService.decrementarContador()
      this.cartService.remove()
    }
  }

  aplicarDesc(cupom :string){
    this.novoTotal = this.valorTotal;
    if(cupom === "desc" && this.novoTotal > 50){
      this.novoTotal -= 50;
      this.cupomAplicado = true;
    }
  }

  get valorTotal() {
    let total = 0;
    for (let product of this.cart) {
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

  ngOnInit() {
    this.cartService.currentCart.subscribe(cart => this.cart = cart);

 }
}
