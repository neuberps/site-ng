import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service/service.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { FormsModule } from '@angular/forms';
import { ServicePipe } from './service/service/service.pipe';

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
    ServicePipe,
    RouterLink
  ]
})

export class PagesModule { }
