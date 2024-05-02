import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service/service.component';
import { ProductComponent } from './pages/product/product.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuardService } from './pages/login/services/auth-guard.service';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetailsComponent } from './pages/details/details.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ServiceDetailsComponent } from './pages/service/service/service-details/service-details.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';

import { DetailOrderComponent } from './pages/detail-order/detail-order.component';

export const routes: Routes = [


  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'login', component: LoginComponent
  },

  {

    path: 'signup', component: SignupComponent
  },

 /*{
    path: 'checkout',
    component: ChecoutComponent,
    canActivate: [AuthGuard]

  },
 */

  {

    path: 'product', component: ProductComponent
  },

  {
    path: 'checkout', component: CheckoutComponent
  },

  {
    path: 'details', component: DetailsComponent
  },


  { path: 'details/:id', component: DetailsComponent

  },

  {
    path: 'product/:idCategory', component: ProductComponent
  },

  {
    path: 'service', component: ServiceComponent
  },

  {
    path: 'shopping-card', component: ShoppingCardComponent, canActivate: [AuthGuardService]
  },

  {
    path: 'service-details/:id', component: ServiceDetailsComponent
  },
  {
    path: 'service/:idCategory', component: ServiceComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },

  {
    path: 'category', component: CategoriesComponent
  },

  {
    path: 'order', component: OrderComponent
  },

  {
    path: 'order-detail', component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
