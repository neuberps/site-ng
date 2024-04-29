import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Order } from './model/order';
import { OrderService } from './service/order.service';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    NgFor, NgIf , FormsModule, RouterLink , CommonModule
    ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
returnList() {
  
}

  orders: Order[] = [];

  // constructor(private service:OrderService){}

  ngOnInit() {
    // this.service.findAll()
    // .subscribe(order => {
    //   this.orders = order as Order[];
    //   console.log(this.orders);
    // });
  }

}

