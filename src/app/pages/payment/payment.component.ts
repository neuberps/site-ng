import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesPayment } from './services/services.service';
import { RouterModule } from '@angular/router';
import { Payment } from './model/payment';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
     RouterModule
    ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  payments: Payment[] = [];

  constructor(private serivice:ServicesPayment){}

  ngOnInit() {

    this.serivice.getPayment()
    .subscribe(payment => {
      this.payments = payment as Payment[];
      console.log(this.payments);
    });

  }
}
