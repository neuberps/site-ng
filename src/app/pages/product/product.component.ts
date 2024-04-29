import { Component, OnInit } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from './model/product';
import { ProductService } from './product.service';
import { Router, RouterLink } from '@angular/router';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterLink,
    DetailsComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];


  constructor(
    private service: ProductService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe( response => this.products = response);
  }

  //addToCart(product: any) {
    //this.cartService.addToCart(product);
    //this.cartService.incrementarContador();
  //}


}


