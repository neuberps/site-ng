import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { CartService } from '../../pages/shopping-card/services/cart.service';
import { Router, RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt)
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    CurrencyPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {



  constructor(private router: Router, private cartService: CartService) {}

  hideComponent(): boolean {
    const url = this.router.url;
    return (
      url === '/login' ||
      url === '/signup' ||
      url === '/order' ||
      url === '/order-detail'
    );
  }

  getContador():number{
   return this.cartService.getCartSession().totalCart;
  }
  getValor():number{
    return this.cartService.valorTotal;
   }

  ngOnInit(){


  }
}
