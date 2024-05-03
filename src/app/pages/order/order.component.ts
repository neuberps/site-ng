import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order } from './model/order';
import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ CommonModule, FormsModule,
    HttpClientModule, RouterModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  searchValue: any;
  router: any;

  // constructor(private service: OrderService, private router: Router) {}

  ngOnInit(): void {
    // this.service.findAll().subscribe((response) => (this.orders = response));
  }

  detailOrder() {
    this.router.navigateByUrl('/detail-order');
  }
}

