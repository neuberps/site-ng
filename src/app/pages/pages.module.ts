import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterLink } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
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
    RouterModule,
    FormsModule,
    RouterLink
  ]
})
export class PagesModule { }
