import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OrderService } from '../order/service/order.service';
import { Order } from '../order/model/order';
import { Product } from '../product/model/product';
import { ProductService } from '../product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [ CommonModule, FormsModule,
  HttpClientModule, RouterModule],

  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orders: Order[] = [];
  products: Product[] = [];

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }
}





