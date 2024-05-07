import { Cart } from './../../pages/shopping-card/model/cart';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../pages/shopping-card/services/cart.service';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
  ngOnInit(){


  }
}
