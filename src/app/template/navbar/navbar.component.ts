import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../pages/shopping-card/services/cart.service';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../pages/login/services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  contador: number = 0;

  constructor(private router: Router, private cartService: CartService, private loginService: LoginService,) {}

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
    });
  }

  public getUserSession(): any {
    const user = window.sessionStorage.getItem(LoginService.SESSION_USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
    const user = window.sessionStorage.getItem(LoginService.SESSION_USER_KEY);
    if (user) {
      return true;
    }
  }
    return false;
  }

  logout() {
    this.loginService.logout(); // Chamando o mesmo método de logout no Service (loginService).
    this.router.navigate(['/login']); // Redirecionar para a página de login ou home.
  }
}
