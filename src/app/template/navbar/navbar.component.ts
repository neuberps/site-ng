import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  hideComponent():  boolean {
    const url = this.router.url;
    return url === '/login' || url === '/signup' || url === '/order' || url === '/order-detail';
  }

}


