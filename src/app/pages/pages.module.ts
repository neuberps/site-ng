import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    ProductComponent,
    ShoppingCardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }
