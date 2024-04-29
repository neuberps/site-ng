import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routes';

import { RouterModule } from '@angular/router';
import { NavbarModule } from './template/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './pages/order/service/order.service';




@NgModule({
  declarations: [

  ],
  imports: [

    AppRoutingModule,
    RouterModule,
    NavbarModule, HttpClientModule,

  ],
  providers:[
    OrderService

  ]
})
export class AppModule { }
