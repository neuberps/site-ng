import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../pages/shopping-card/services/cart.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  contador: number = 0;

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

  ngOnInit() {
    this.cartService.currentCount.subscribe((value) => {
      this.contador = value;

      console.log(this.contador);
    });
  }
}
