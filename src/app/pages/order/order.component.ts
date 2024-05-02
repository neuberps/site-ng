import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

}
