import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product/model/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterLink,
    ProductComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  product: Product = new Product;


  constructor(
    private service: ProductService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
    this.service
      .getById(id)
      .subscribe( response => this.product = response);
    }
  }
}
