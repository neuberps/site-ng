import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service/service.component';
import { ProductComponent } from './pages/product/product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetailsComponent } from './pages/details/details.component';

import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< Updated upstream
import { ServiceDetailsComponent } from './pages/service/service/service-details/service-details.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
=======
import { OrderComponent } from './pages/order/order.component';
import { DetailOrderComponent } from './pages/detail-order/detail-order.component';

>>>>>>> Stashed changes

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
    path: 'shopping-card', component: ShoppingCardComponent
  },

  {
<<<<<<< Updated upstream
    path: 'category', component: CategoriesComponent
  },

  {
=======
>>>>>>> Stashed changes
    path: 'order', component: OrderComponent
  },

  {
<<<<<<< Updated upstream
    path: 'order-detail', component: OrderDetailComponent
  }
=======
    path: 'detail-order', component: DetailOrderComponent
  },
>>>>>>> Stashed changes

  //routes secondaries
  //  { path: 'home', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },

   //standalone
  //  { path: 'add-user', loadComponent: ()=> import('./..... add-user.component').then(c => c.AddUserComponent)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
