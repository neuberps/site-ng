import { Component, OnInit } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from './model/product';
import { ProductService } from './product.service';
import { Router, RouterLink } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterLink,
    DetailsComponent,
    RouterModule,
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  searchValue: string = '';
  products: Product[] = [];
  filteredService: Product[] = []
  category: string = '';


  constructor(
    public service: ProductService,
    public route: ActivatedRoute) {}

    ngOnInit(): void {
      const idCategory = this.route.snapshot.paramMap.get('idCategory')
      if(idCategory){
        this.service.findByIdCategory(idCategory).subscribe(response => {
          this.products = response;
          this.filteredService = this.products;
        })
      } else {
        this.service.findAll().subscribe(response => {
          this.products = response;
          this.filteredService = this.products;
        })
      }
    }

  //addToCart(product: any) {
    //this.cartService.addToCart(product);
    //this.cartService.incrementarContador();
  //}


}


