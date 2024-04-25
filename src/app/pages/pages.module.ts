import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
<<<<<<< Updated upstream
import { ShippingCarComponent } from './shopping-card/shopping-card.component';
import { LoginComponent } from './login/login.component';
=======
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    ProductComponent,
<<<<<<< Updated upstream
    ShippingCarComponent,
    LoginComponent
=======
    LoginComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
<<<<<<< Updated upstream
    RouterModule
=======
    RouterModule,
    FormsModule
>>>>>>> Stashed changes
  ]
})
export class PagesModule { }
