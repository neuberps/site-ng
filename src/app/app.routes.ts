import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service/service.component';
import { ProductComponent } from './pages/product/product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetailsComponent } from './pages/details/details.component';

import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { LoginComponent } from './pages/login/login.component';
import { ServiceDetailsComponent } from './pages/service/service/service-details/service-details.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [


  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'login', component: LoginComponent
  },

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
    path: 'service', component: ServiceComponent
  },

  {
    path: 'service-details/:id', component: ServiceDetailsComponent
  },
  {
    path: 'service/:category', component: ServiceComponent
  },
  {
    path: 'shopping-card', component: ShoppingCardComponent
  },
  {
    path: 'category', component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
